import { Component, effect, ElementRef, signal, ViewChild } from '@angular/core';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { EmployesService } from '../../../_services/employes.service';
import { StateEmployeeResponseModel } from '../../../_models/users/employees/employeeResponse.interface';
import { MatchModel } from '../../../_models/common/matchmodel.interface';
import { EmployeeDTO } from '../../../_models/dto/users/employee.interface.dto';
import { EmployeeBaseFilter } from '../../../_models/dto/users/employeesearch.interface.dto';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { tableconfig } from '../../../config/table.config';
import { FilterApplyService } from '../../../_services/common/filter.service';
import { LibModule } from '../../lib/lib.module';
import { RouterLink } from '@angular/router';
import { TranslateLanService } from '../../../../layout/services/translate-lan.service';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe, TableModule, ButtonModule, LibModule, RouterLink],
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

  constructor(private employeeServ: EmployesService, private filterservice: FilterApplyService, private translate : TranslateService, private translateLanService : TranslateLanService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
      effect(() => {
        this.employeeServ.postEmployee(this.employeedto())
          .subscribe({
            next: t => {
              console.log({...this.employeedto()});
              console.log(t);
              this.stateValues.set({ data: (t.inventory.data !== null) ? [...t.inventory.data] : [], page: t.inventory.page, rows: t.inventory.rows, total_records: t.inventory.total_records, loaded: true, loading: false, error: null});
            },
            error: (err) => this.stateValues.set({ data: [], page: 1, rows: 0, total_records: 0, loaded: false, loading: true, error: err})});
      })
  }

  getEmployees () {
    this.employeeServ.getEmployees().subscribe(t => {
      console.log(t);
    })
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
}
