import { Column } from '@/core/_models/common/columns.interface';
import { MatchModel } from '@/core/_models/common/matchmodel.interface';
import { AlmacenesService } from '@/core/_services/sucursales.service';
import { ArrayutilService } from '@/core/_services/common/arrayutil.service';
import { FilterApplyService } from '@/core/_services/common/filter.service';
import { LibModule } from '@/core/components/lib/lib.module';
import { tableconfig } from '@/core/config/table.config';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { UpperCasePipe } from '@angular/common';
import { Component, computed, effect, Signal, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MultiSelectChangeEvent, MultiSelectModule, MultiSelectSelectAllChangeEvent } from 'primeng/multiselect';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { map } from 'rxjs';
import { BranchDTO } from '@/core/_models/dto/inventory/almacenes/sucursales/branch.interface.dto';
import { StateBranchResponseModel } from '@/core/_models/inventory/sucursales/branch.Response';
import { BranchBaseFilter } from '@/core/_models/dto/inventory/almacenes/sucursales/branchSearch.interface.dto';

@Component({
  selector: 'app-branches',
  imports: [CardModule, TableModule, ButtonModule, TranslatePipe, UpperCasePipe, LibModule, MultiSelectModule, FormsModule],
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss'
})
export default class BranchesComponent {
  table = viewChild<Table>('dt1');
  filter = viewChild<Table>('filter');

  stateValues = signal<StateBranchResponseModel>({ data: [], metadata: { page: 0, rows: 0, total_records: 0 }, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  branchesdto = signal<BranchDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as BranchBaseFilter }});  

  tablecon: number[] = tableconfig.cantidadRegistros;
  stateIni = false;
  private readonly keylocalColumn = "branchs_cols";

  private readonly allowedColumns: string[] = ['id', 'nombre', 'direccion', 'matriz', 'pacacidad'];
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

  constructor(private readonly branches: AlmacenesService, private readonly filterservice: FilterApplyService, private readonly translate : TranslateService, private readonly translateLanService : TranslateLanService, private readonly arrayurilservice: ArrayutilService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    effect(() => {
      this.branches
        .getAllSucursalesFiler(this.branchesdto())
        .pipe(map(t => {
          console.log(t);
          return { data: Array.isArray(t.data) ? [...t.data] : [], metadata: { page: t.metadata.page, rows: t.metadata.rows, total_records: t.metadata.total_records }}}))
        .subscribe({
          next: t => {
            console.log(this.branchesdto(), t);
            this.stateValues.set({ data: t.data, metadata: t.metadata, loading: false, error: null});
            console.log(this.stateValues()); return t;
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
    if (event.filters && this.stateIni !== false) { // if (this.stateValues().accounts !== null && this.stateValues().categories !== null) {
      this.branchesdto.update(() => ({
        config: {
          populate_data: false,
          page: ((event.first || 0) / Number(event.rows)) + 1,
          sort_field: event.multiSortMeta ? event.multiSortMeta.filter(t => t.field) : [],
          rows: Number(event.rows),
        },
        filter: {
          ...this.filterservice.applyFilterNew(event.filters, this.branchesdto().filter),
        }
      })); // this.enformato = this.filterservice.preparaFiltersChip(event.filters, this.reemplazo); // }
    } // this.initData(this.namefilter());
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

  add = () => {
    
  }
}
