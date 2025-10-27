import { Component, computed, effect, ElementRef, Signal, signal, viewChild } from '@angular/core';
import { NgStyle, UpperCasePipe } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { LibModule } from '../../../lib/lib.module';
import { StateProveedorResponseModel } from '../../../../_models/users/proveedores/proveedoresResponse.interface';
import { MatchModel } from '../../../../_models/common/matchmodel.interface';
import { ProveedorDTO } from '../../../../_models/dto/users/proveedors/proveedor.interface.dto';
import { ProveedorBaseFilter } from '../../../../_models/dto/users/proveedors/proveedoresSearch.interface.dto';
import { tableconfig } from '../../../../config/table.config';
import { Column } from '../../../../_models/common/columns.interface';
import { ProveedoresService } from '../../../../_services/proveedors.service';
import { FilterApplyService } from '../../../../_services/common/filter.service';
import { map } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { FilterInputComponent } from '@/core/components/lib/filter-input/filter-input.component';
import { PersonasService } from '@/core/_services/personas.service';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { MultiSelectChangeEvent, MultiSelectModule, MultiSelectSelectAllChangeEvent } from 'primeng/multiselect';
import { ArrayutilService } from '@/core/_services/common/arrayutil.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [TranslateModule, CardModule, UpperCasePipe, TableModule, ButtonModule, LibModule, IconFieldModule, FilterInputComponent, NgStyle, InputGroupModule, MultiSelectModule, FormsModule],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss'
})
export default class SuppliersComponent {
  table = viewChild<Table>('dt1');
  filter = viewChild<ElementRef>('filter');
  stateValues = signal<StateProveedorResponseModel>({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  proveedordto = signal<ProveedorDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ProveedorBaseFilter }});
  tablecon: number[] = tableconfig.cantidadRegistros;
  stateIni = false;
  private readonly allowedColumns: string[] = ['id', 'ci', 'nombre', 'app', 'apm', 'sexo', 'fnaci', 'idtipo', 'empresa', 'nit', 'direccion', 'telefono', 'email'];
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

  private readonly keylocalColumn = "proveedors_cols";
  constructor(
    private readonly employeeServ: ProveedoresService, 
    private readonly filterservice: FilterApplyService, 
    private readonly translate : TranslateService, 
    private readonly translateLanService : TranslateLanService, 
    private readonly personasService: PersonasService, 
    private readonly router: Router, 
    private readonly arrayurilservice: ArrayutilService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    effect(() => {
      this.employeeServ.postProveedores(this.proveedordto())
        .pipe(map(t => {
          console.log("console.log('', t):   ", t);
          return { data: Array.isArray(t) ? [...t] : [], page: 0, rows: 0, total_records: 0, loaded: true, loading: false, error: null};
        }))
        .subscribe({
          next: t => {
            console.log({...this.proveedordto()});
            console.log(t);
            this.stateValues.set({ data: (t.data && t.data.length > 0) ? [...t.data] : [], page: 0, rows: 0, total_records: 0, loaded: true, loading: false, error: null });
          },
          error: (err) => this.stateValues.set({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: err })
        })
    })
  }

    clear = (table: Table) => {
      this.proveedordto.set({ config: { populate_data: false, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ProveedorBaseFilter }})
      table.clear(); 
    }
    
  getDataPaged(event: TableLazyLoadEvent) {
    if (event.filters && this.stateIni !== false) { // if (this.stateValues().accounts !== null && this.stateValues().categories !== null) {
        this.proveedordto.update(() => ({
          config: {
            populate_data: false,
            page: ((event.first || 0) / Number(event.rows)) + 1,
            sort_field: event.multiSortMeta ? event.multiSortMeta.filter(t => t.field) : [],
            rows: Number(event.rows),
          },
          filter: {
            ...this.filterservice.applyFilterNew(event.filters, this.proveedordto().filter),
          }
        })); // this.enformato = this.filterservice.preparaFiltersChip(event.filters, this.reemplazo); // }
    } // this.initData(this.namefilter());
    this.stateIni = true;
  }

  getSexo = (sex: string): string => this.personasService.getSexo(sex);

  add = () => this.router.navigate(['/users/proveedores/create']);

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