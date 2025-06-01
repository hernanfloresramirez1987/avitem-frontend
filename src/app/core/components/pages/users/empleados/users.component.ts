import { Component, computed, effect, ElementRef, Signal, signal, ViewChild } from '@angular/core';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { EmployeesService } from '../../../../_services/employees.service';
import { StateEmployeeResponseModel } from '../../../../_models/users/employees/employeeResponse.interface';
import { MatchModel } from '../../../../_models/common/matchmodel.interface';
import { EmployeeDTO } from '../../../../_models/dto/users/employees/employee.interface.dto';
import { EmployeeBaseFilter } from '../../../../_models/dto/users/employees/employeeSearch.interface.dto';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { tableconfig } from '../../../../config/table.config';
import { FilterApplyService } from '../../../../_services/common/filter.service';
import { LibModule } from '../../../lib/lib.module';
import { map } from 'rxjs';
import { Column } from '../../../../_models/common/columns.interface';
import { CardModule } from 'primeng/card';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { FilterInputComponent } from '@/core/components/lib/filter-input/filter-input.component';
import { IconFieldModule } from 'primeng/iconfield';
import { Router, RouterLink } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { PersonasService } from '@/core/_services/personas.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TranslateModule, CardModule, UpperCasePipe, TableModule, ButtonModule, LibModule, FilterInputComponent, IconFieldModule, InputGroupModule, NgStyle],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export default class UsersComponent {
  @ViewChild('dt1') table!: Table;
  @ViewChild('filter') filter!: ElementRef;

  stateValues = signal<StateEmployeeResponseModel>({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  employeedto = signal<EmployeeDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as EmployeeBaseFilter }});

  tablecon: number[] = tableconfig.cantidadRegistros;
  stateIni = false;

  private allowedColumns: string[] = ['id', 'ci', 'nombre', 'app', 'apm', 'sexo', 'fnaci', 'idtipo', 'idcargo', 'salario', 'direccion', 'telefono', 'email'];
  columns: string[] = this.allowedColumns;
  columnsSelectSignal: Signal<Column[]> = computed(() => this.columns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
    })));

  constructor(private employeeServ: EmployeesService, private filterservice: FilterApplyService, private translate : TranslateService, private translateLanService : TranslateLanService, private router: Router, private personasService: PersonasService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    effect(() => {
      this.employeeServ.postEmployees(this.employeedto())
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

  getEmployees () {
    // this.employeeServ.getEmployee().subscribe(t => {
    //   console.log(t);
    // })
  }

  clear = (table: Table) => {
    this.employeedto.set({ config: { populate_data: false, page: 1, rows: 15, sort_field : []}, filter: { ...{} as EmployeeBaseFilter }})
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

  add = () => this.router.navigate(['/users/empleados/create']);

  getSexo = (sex: string): string => this.personasService.getSexo(sex);
}
