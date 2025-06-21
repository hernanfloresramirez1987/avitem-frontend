import { ChangeDetectionStrategy, Component, computed, effect, ElementRef, signal, Signal, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Table, TableModule, TableLazyLoadEvent } from 'primeng/table';
import { tableconfig } from '@/core/config/table.config';
import { Column } from '@/core/_models/common/columns.interface';
import { StateWarehouseResponseModel } from '@/core/_models/inventory/almacenes/warehouse.Response';
import { MatchModel } from '@/core/_models/common/matchmodel.interface';
import { FilterApplyService } from '@/core/_services/common/filter.service';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { WarehousesService } from '@/core/_services/warehouses.service';
import { WarehouseDTO } from '@/core/_models/dto/inventory/almacenes/warehouse.interface.dto';
import { WarehouseBaseFilter } from '@/core/_models/dto/inventory/almacenes/warehouseSearch.interface.dto';
import { ButtonModule } from 'primeng/button';
import { map } from 'rxjs';
import { FilterInputComponent } from '@/core/components/lib/filter-input/filter-input.component';
import { FilterClearComponentComponent } from '@/core/components/lib/filter-clear-component/filter-clear-component.component';
import { LibModule } from '@/core/components/lib/lib.module';
import { MultiSelectChangeEvent, MultiSelectModule, MultiSelectSelectAllChangeEvent } from 'primeng/multiselect';
import { FormsModule, NgModel } from '@angular/forms';
import { ArrayutilService } from '@/core/_services/common/arrayutil.service';

@Component({
  selector: 'app-warehouse',
  standalone: true,
  imports: [CardModule, ButtonModule, TranslateModule, UpperCasePipe, TableModule, LibModule, MultiSelectModule, FormsModule],
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class WarehouseComponent {
  @ViewChild('dt1') table!: Table;
  @ViewChild('filter') filter!: ElementRef;

  stateValues = signal<StateWarehouseResponseModel>({ data: [], metadata: { page: 0, rows: 0, total_records: 0 }, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  warehousesdto = signal<WarehouseDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as WarehouseBaseFilter }});  
  
  tablecon: number[] = tableconfig.cantidadRegistros;
  stateIni = false;
  private readonly keylocalColumn = "warehouse_cols";

  private allowedColumns: string[] = ['id', 'idLote', 'producto', 'almacen', 'cantidadStock', 'cantidadDespachada', 'cant_salidas', 'cant_transferencias', 'precio_compra', 'precio_venta', 'sucursal'];
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

  expandedRows = {};

  constructor(private warehouseServ: WarehousesService, private filterservice: FilterApplyService, private translate : TranslateService, private translateLanService : TranslateLanService, private messageService: MessageService, private router: Router, private arrayurilservice: ArrayutilService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    effect(() => { //console.log("console.log('', this.warehousesdto()):   ", this.warehousesdto());
      this.warehouseServ
        .getAllWarehouses(this.warehousesdto())
        .pipe(map(t => {
          console.log(t);
          return { data: Array.isArray(t.data) ? [...t.data] : [], metadata: { page: t.metadata.page, rows: t.metadata.rows, total_records: t.metadata.total_records }, loading: false, error: null}}))
        .subscribe({
          next: t => {
            console.log(t);
            console.log({...this.warehousesdto()});
            this.stateValues.set({ data: t.data, metadata: t.metadata, loading: false, error: null});
            console.log(this.stateValues());
          },
          error: (err) => {
            this.stateValues.set({ data: [], metadata: { page: 0, rows: 0, total_records: 0 }, loading: false, error: err });
            console.log("console.log('', err):   ", err, this.stateValues());
          },
          complete: () => {
            console.log("console.log('', this.stateValues()):   ", this.stateValues());
          }
        })
    });
  }

  clear = (table: Table) => {
    table.clear();
  }

  onColumnReorder = ($event: any) => localStorage.setItem(this.keylocalColumn, JSON.stringify($event.columns));

  getDataPaged(event: TableLazyLoadEvent) {
    if (event.filters && this.stateIni !== false) {
      // if (this.stateValues().accounts !== null && this.stateValues().categories !== null) {
      this.warehousesdto.update(() => ({
        config: {
          populate_data: false,
          page: ((event.first || 0) / Number(event.rows)) + 1,
          sort_field: event.multiSortMeta ? event.multiSortMeta.filter(t => t.field) : [],
          rows: Number(event.rows),
        },
        filter: {
          ...this.filterservice.applyFilterNew(event.filters, this.warehousesdto().filter),
        }
      }));
      // this.enformato = this.filterservice.preparaFiltersChip(event.filters, this.reemplazo);
      // }
    }
    // this.initData(this.namefilter());
    this.stateIni = true;
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
