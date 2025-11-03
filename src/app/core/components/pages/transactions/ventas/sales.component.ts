import { Component, computed, effect, ElementRef, Signal, signal, viewChild } from '@angular/core';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { TranslateLanService } from '../../../../../layout/service/translate-lan.service';
import { FilterApplyService } from '../../../../../core/_services/common/filter.service';
import { tableconfig } from '../../../../../core/config/table.config';
import { MatchModel } from '../../../../../core/_models/common/matchmodel.interface';
import { Column } from '../../../../../core/_models/common/columns.interface';

import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Menu } from 'primeng/menu';
import { map } from 'rxjs';
import { VentasService } from '@/core/_services/ventas.service';
import { StateVentasResponseModel } from '@/core/_models/inventory/ventas/ventasResponse.interface';
import { VentasDTO } from '@/core/_models/dto/inventory/ventas/ventas.interface.dto';
import { VentasBaseFilter } from '@/core/_models/dto/inventory/ventas/ventasSearch.interface.dto';
import { Router } from '@angular/router';
import { FilterInputComponent } from '@/core/components/lib/filter-input/filter-input.component';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { LibModule } from '@/core/components/lib/lib.module';
import { MenuItem } from 'primeng/api';
import { BolivianosPipe } from '@/core/pipes/bolivianos.pipe';
import { PdfReportService } from '@/core/_services/common/pdfreport.service';
import jsPDF from 'jspdf';
import { MultiSelectChangeEvent, MultiSelectModule, MultiSelectSelectAllChangeEvent } from 'primeng/multiselect';
import { ArrayutilService } from '@/core/_services/common/arrayutil.service';
import { FormsModule } from '@angular/forms';
import { DetalleVentasService } from '@/core/_services/detalle-ventas.service';
import { VentasItem } from '@/core/_models/inventory/ventas/ventas.model';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    TranslateModule,
    CardModule,
    TableModule,
    ButtonModule,
    LibModule,
    FilterInputComponent,
    UpperCasePipe,
    TieredMenuModule,
    DatePipe,
    FormsModule,
    BolivianosPipe,
    MultiSelectModule
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export default class SalesComponent {
  id: string | null = null;
  table = viewChild<Table>('dt1');
  menu = viewChild<Menu>('menu');
  filter = viewChild<ElementRef>('filter');
  stateValues = signal<StateVentasResponseModel>({ data: [], metadata: { page: 0, rows: 0, total_records: 0 }, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  ventasdto = signal<VentasDTO>({ config: { populate_data: true,  page: 1, rows: 15, sort_field : []}, filter: { ...{} as VentasBaseFilter }});
  tablecon: number[] = tableconfig  .cantidadRegistros;
  stateIni = false;
  readonly title: string = 'pages.sales';
  readonly subtitle: string = 'labels.admin_sales';
  private readonly allowedColumns: string[] = ['id', 'no', 'fechaVenta', 'total', 'cliente', 'ci', 'nit'];
  columns: string[] = this.allowedColumns;
  columnsSelectSignal: Signal<Column[]> = computed(() => this.columns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
    })));
  colsOptionsSelect: Column[] = this.allowedColumns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
  }));

  selectedItemId: VentasItem | null = null;
  
  items: MenuItem[] = [
    {
      label: 'View',
      icon: 'pi pi-eye',
      command: (() => this.viewVenta()),
    },
    { label: 'Download',
      icon: 'pi pi-download',
      items: [
        { label: 'Pdf',
          icon: 'pi pi-file-pdf',
          style: { color: "crimson" },
          command: () => {
            if (this.selectedItemId) {
              this.getDetVentas(this.selectedItemId);
            } else {
              console.warn('No hay un ítem seleccionado para descargar el PDF.');
            }
          }
        }
      ]
    },
  ];

  expandedRows = {};

  private readonly keylocalColumn = "sales_cols";

  constructor(
    private readonly translateLanService: TranslateLanService, 
    private readonly translate : TranslateService, 
    private readonly filterservice: FilterApplyService,
    private readonly ventasServ: VentasService,
    private readonly router: Router,
    private readonly pdfreport: PdfReportService,
    private readonly arrayurilservice: ArrayutilService,
    private readonly detalleVentasServ: DetalleVentasService
  ) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    effect(() => {
      this.ventasServ.postAllVentasSearch(this.ventasdto())
        .pipe(
          map(t => ({ data: Array.isArray(t.data) ? [...t.data] : [], metadata: { page: t.metadata.page, rows: t.metadata.rows, total_records: t.metadata.total_records }, loading: false, error: null})))
        .subscribe({
          next: t => 
            this.stateValues.set(t),
          error: (err) => {
            console.log(err);
            this.stateValues.set({ data: [], metadata: { page: 0, rows: 0, total_records: 0 }, loading: true, error: err })
          }
        })
    });
  }

  
viewVenta() { console.log(this.selectedItemId)
  if (this.selectedItemId) {
    this.router.navigate([`/transactions/ventas/detail/${this.selectedItemId.id}`]);
  } else {
    console.warn('No hay una venta seleccionada para ver el detalle.');
  }
}

  onColumnReorder = ($event: any) => localStorage.setItem(this.keylocalColumn, JSON.stringify($event.columns));
  
  getDataPaged(event: TableLazyLoadEvent) {
    if (event.filters && this.stateIni !== false) { // if (this.stateValues().accounts !== null && this.stateValues().categories !== null) {
      this.ventasdto.update(() => ({
        config: {
          populate_data: false,
          page: ((event.first || 0) / Number(event.rows)) + 1,
          sort_field: event.multiSortMeta ? event.multiSortMeta.filter(t => t.field) : [],
          rows: Number(event.rows),
        },
        filter: {
          ...this.filterservice.applyFilterNew(event.filters, this.ventasdto().filter),
        }
      })); // this.enformato = this.filterservice.preparaFiltersChip(event.filters, this.reemplazo); // }
    } // this.initData(this.namefilter());
    this.stateIni = true;
  }

  clear = (table: Table) => {
    this.ventasdto.set({ config: { populate_data: false, page: 1, rows: 15, sort_field : []}, filter: { ...{} as VentasBaseFilter }})
    table.clear(); 
  }

  add = () => this.router.navigate(['/transactions/ventas/create']);

  openMenu(event: Event, rowData: any) { console.log(rowData)
    this.selectedItemId = rowData;
    this.menu()?.toggle(event); // Abre el menú contextual
  }

  getDetVentas(item: VentasItem) {
    return this.detalleVentasServ.getDetVentas(+item.id)
      .subscribe(t => {
        console.log(t);
        this.generatePdf(item, t);
      return t});
  }

  generatePdf = (data: VentasItem, detaildata: any[]) => {
    const doc = new jsPDF();
    console.log(detaildata); console.log(data);
    this.pdfreport.generatePdf(data, detaildata); //this.getDetVentas(this.selectedItemId as number);
  }

  cargaColumnas($event: MultiSelectChangeEvent) {
    const ordered = this.arrayurilservice.selectOrderedArray(this.colsOptionsSelect, $event.value);
    this.columnsSelectSignal = computed(() => ordered);
    localStorage.setItem(this.keylocalColumn, JSON.stringify(this.columnsSelectSignal()));
  }

  selectAll($event: MultiSelectSelectAllChangeEvent) {
    let ordered: any[] = [];
    if ($event.checked) {
      ordered = this.allowedColumns;
    }
    this.columnsSelectSignal = computed(() => ordered);
    localStorage.setItem(this.keylocalColumn, JSON.stringify(ordered));
  }
}