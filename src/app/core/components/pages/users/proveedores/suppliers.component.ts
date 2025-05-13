import { UpperCasePipe } from '@angular/common';
import { Component, computed, effect, ElementRef, Signal, signal, ViewChild } from '@angular/core';
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
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { FilterInputComponent } from '@/core/components/lib/filter-input/filter-input.component';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [TranslateModule, CardModule, UpperCasePipe, TableModule, ButtonModule, LibModule, RouterLink, FilterInputComponent],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.scss'
})
export default class SuppliersComponent {
  @ViewChild('dt1') table!: Table;
  @ViewChild('filter') filter!: ElementRef;

  stateValues = signal<StateProveedorResponseModel>({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  employeedto = signal<ProveedorDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ProveedorBaseFilter }});

  tablecon: number[] = tableconfig.cantidadRegistros;
  stateIni = false;

  private allowedColumns: string[] = ['id', 'ci', 'nombre', 'app', 'apm', 'sexo', 'fnaci', 'idtipo', 'empresa', 'nit', 'direccion', 'telefono', 'email'];
  columns: string[] = this.allowedColumns;
  columnsSelectSignal: Signal<Column[]> = computed(() => this.columns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
    })));

    constructor(private employeeServ: ProveedoresService, private filterservice: FilterApplyService, private translate : TranslateService, private translateLanService : TranslateLanService) {
      this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
      effect(() => {
        this.employeeServ.postProveedores(this.employeedto())
          .pipe(map(t => {
            console.log("console.log('', t):   ", t);
            return { data: Array.isArray(t) ? [...t] : [], page: 0, rows: 0, total_records: 0, loaded: true, loading: false, error: null};
          }))
          .subscribe({
            next: t => {
              console.log({...this.employeedto()});
              console.log(t);
              this.stateValues.set({ data: (t.data && t.data.length > 0) ? [...t.data] : [], page: 0, rows: 0, total_records: 0, loaded: true, loading: false, error: null });
            },
            error: (err) => this.stateValues.set({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: err })
          })
      })
    }

    clear = (table: Table) => {
      this.employeedto.set({ config: { populate_data: false, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ProveedorBaseFilter }})
      table.clear(); 
    }
    
  getDataPaged(event: TableLazyLoadEvent) {
    if (event.filters && this.stateIni !== false) {
      // if (this.stateValues().accounts !== null && this.stateValues().categories !== null) {
        this.employeedto.update(() => ({
          config: {
            populate_data: false,
            page: ((event.first || 0) / Number(event.rows)) + 1,
            sort_field: event.multiSortMeta ? event.multiSortMeta.filter(t => t.field) : [],
            rows: Number(event.rows),
          },
          filter: {
            ...this.filterservice.applyFilterNew(event.filters, this.employeedto().filter),
          }
        }));
        // this.enformato = this.filterservice.preparaFiltersChip(event.filters, this.reemplazo);
      // }
    }
    // this.initData(this.namefilter());
    this.stateIni = true;
  }

}
