import { Component, computed, effect, ElementRef, LOCALE_ID, Signal, signal, viewChild } from '@angular/core';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { StateComprasResponseModel } from '../../../../_models/inventory/compras/comprasResponse.interface';
import { FilterInputComponent } from '../../../../../core/components/lib/filter-input/filter-input.component';
import { TranslateLanService } from '../../../../../layout/service/translate-lan.service';
import { FilterApplyService } from '../../../../_services/common/filter.service';
import { ComprasBaseFilter } from '../../../../_models/dto/inventory/compras/comprasSearch.interface.dto';
import { ComprasService } from '../../../../_services/compras.service';
import { tableconfig } from '../../../../config/table.config';
import { ComprasDTO } from '../../../../_models/dto/inventory/compras/compras.interface.dto';
import { MatchModel } from '../../../../_models/common/matchmodel.interface';
import { LibModule } from '../../../lib/lib.module';
import { Column } from '../../../../_models/common/columns.interface';
import { map } from 'rxjs';

import { Table, TableLazyLoadEvent, TableModule, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { MenuItem, MessageService } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Menu } from 'primeng/menu';
import { BolivianosPipe } from '@/core/pipes/bolivianos.pipe';
import { DateTimeSeparatePipe } from '@/core/pipes/datetimeseparate.pipe';

import { registerLocaleData } from '@angular/common';
import localeEsBO from '@angular/common/locales/es-BO';

import { MultiSelectChangeEvent, MultiSelectModule, MultiSelectSelectAllChangeEvent } from 'primeng/multiselect';
import { ArrayutilService } from '@/core/_services/common/arrayutil.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-purchases',
  standalone: true,
  imports: [
    TranslateModule,
    TableModule,
    CardModule,
    TagModule,
    ToastModule,
    RatingModule,
    ButtonModule,
    UpperCasePipe,
    TableModule,
    ButtonModule,
    LibModule,
    FilterInputComponent,
    TieredMenuModule,
    // CurrencyPipe,
    BolivianosPipe,
    DateTimeSeparatePipe,
    MultiSelectModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-BO' }
  ],
  templateUrl: './purchases.component.html',
  styleUrl: './purchases.component.scss'
})
export default class PurchasesComponent {
  table = viewChild<Table>('dt1');
  filter = viewChild<ElementRef>('filter');
  menu = viewChild<Menu>('menu');
  stateValues = signal<StateComprasResponseModel>({ data: [], metadata: { page: 0, rows: 0, total_records: 0 }, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  comprasdto = signal<ComprasDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ComprasBaseFilter }});
  tablecon: number[] = tableconfig.cantidadRegistros;
  stateIni = false;
  title = 'pages.purchases';
  private readonly allowedColumns: string[] = ['id', 'idlote', 'fechaCompra', 'total', 'proveedor', 'nombre', 'nit'];
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

  selectedItemId: string | number | null = null;

  items: MenuItem[] = [
    {
      label: 'View',
      icon: 'pi pi-eye',
      command: () => this.router.navigate([`/transactions/compras/detail/${this.selectedItemId}`])
    },
    { label: 'Download',
      icon: 'pi pi-download',
      items: [
        { label: 'Pdf',
          icon: 'pi pi-file-pdf',
          command: (e: any) => {
            console.log(e);
          }
        }
      ]
    },
  ];
  private readonly keylocalColumn = "purchases_cols";

  constructor(
    private readonly translateLanService : TranslateLanService, 
    private readonly translate : TranslateService, 
    private readonly filterservice: FilterApplyService, 
    private readonly comprasServ: ComprasService, 
    private readonly messageService: MessageService, 
    private readonly router: Router, private readonly arrayurilservice: ArrayutilService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    effect(() => {
      this.comprasServ.postAllComprasSearch(this.comprasdto())
        .pipe(
          map(t => {
            console.log(t);
            return ({ data: Array.isArray(t.data) ? [...t.data] : [], metadata: { page: t.metadata.page, rows: t.metadata.rows, total_records: t.metadata.total_records }, loading: false, error: null})}))
        .subscribe({
          next: t => this.stateValues.set(t),
          error: (err) => this.stateValues.set({ data: [], metadata: { page: 0, rows: 0, total_records: 0 }, loading: false, error: err })
        })
    });
    registerLocaleData(localeEsBO);
  }

  clear = (table: Table) => {
    this.comprasdto.set({ config: { populate_data: false, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ComprasBaseFilter }})
    table.clear(); 
  }

  getDataPaged(event: TableLazyLoadEvent) {
    if (event.filters && this.stateIni !== false) { // if (this.stateValues().accounts !== null && this.stateValues().categories !== null) {
      this.comprasdto.update(() => ({
        config: {
          populate_data: false,
          page: ((event.first || 0) / Number(event.rows)) + 1,
          sort_field: event.multiSortMeta ? event.multiSortMeta.filter(t => t.field) : [],
          rows: Number(event.rows),
        },
        filter: {
          ...this.filterservice.applyFilterNew(event.filters, this.comprasdto().filter),
        }
      })); // this.enformato = this.filterservice.preparaFiltersChip(event.filters, this.reemplazo); // }
    } // this.initData(this.namefilter());
    this.stateIni = true;
  }
    ////////////////////
  products: any[] = [{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    orders: [
      {
        id: '1000-1',
        productCode: 'f230fh0g3',
        date: '2020-09-13',
        amount: 65,
        quantity: 1,
        customer: 'David James',
        status: 'PENDING'
      }
    ]
  }];

    expandedRows = {};

    expandAll() {
        this.expandedRows = this.products.reduce((acc, p) => (acc[p.id] = true) && acc, {});
    }

    collapseAll() {
        this.expandedRows = {};
    }

    onRowExpand(event: TableRowExpandEvent) {
        this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
    }

    onRowCollapse(event: TableRowCollapseEvent) {
        this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
    }

    add = () => this.router.navigate(['/transactions/compras/create']);

    openMenu(event: Event, rowData: any) { console.log(rowData)
      this.selectedItemId = rowData.id;
      this.menu()?.toggle(event); // Abre el menú contextual
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