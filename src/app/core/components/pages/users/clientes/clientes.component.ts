import { Component, computed, effect, ElementRef, OnInit, Signal, signal, ViewChild } from '@angular/core';
import { ClientsService } from '../../../../_services/clients.service';
import { UsersService } from '@/core/_services/common/user.service';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { StateClienteResponseModel } from '@/core/_models/users/clients/clientesResponse.interface';
import { MatchModel } from '@/core/_models/common/matchmodel.interface';
import { ClientBaseFilter } from '@/core/_models/dto/users/clients/clientSearch.interface.dto';
import { ClientDTO } from '@/core/_models/dto/users/clients/client.interface.dto';
import { tableconfig } from '@/core/config/table.config';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgStyle, UpperCasePipe } from '@angular/common';
import { Column } from '@/core/_models/common/columns.interface';
import { FilterApplyService } from '@/core/_services/common/filter.service';
import { PersonasService } from '@/core/_services/personas.service';
import { LibModule } from '@/core/components/lib/lib.module';
import { InputGroupModule } from 'primeng/inputgroup';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CardModule, TranslateModule, ButtonModule, UpperCasePipe, TableModule, NgStyle, LibModule, InputGroupModule, IconFieldModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export default class ClientesComponent {
  @ViewChild('dt1') table!: Table;
  @ViewChild('filter') filter!: ElementRef;

  stateValues = signal<StateClienteResponseModel>({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  employeedto = signal<ClientDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ClientBaseFilter }});

  tablecon: number[] = tableconfig.cantidadRegistros;
  stateIni = false;

  private readonly allowedColumns: string[] = ['id', 'ci', 'nombre', 'app', 'apm', 'sexo', 'fnaci', 'idtipo'];
  columns: string[] = this.allowedColumns;
  columnsSelectSignal: Signal<Column[]> = computed(() => this.columns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
    })));

  clients: any[] = [];
  expedidoOptions!: { name: string; code: string }[];

  
  constructor(private readonly usersServ: UsersService, private readonly clientServ: ClientsService, private readonly filterservice: FilterApplyService, private readonly translate : TranslateService, private readonly translateLanService : TranslateLanService, private readonly router: Router, private readonly personasService: PersonasService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    effect(() => { 
      this.clientServ.postClients(this.employeedto())
      .pipe(map(t => {
          console.log(888)
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
    this.usersServ.getExpedidoOptions().subscribe(t => this.expedidoOptions = t);
  }

  clear = (table: Table) => {
    this.employeedto.set({ config: { populate_data: false, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ClientBaseFilter }})
    table.clear(); 
  }

  toggleMenu = (event: any) => {
    console.log(event);
  }

  getDataPaged(event: TableLazyLoadEvent) {
    if (event.filters && this.stateIni !== false) { // if (this.stateValues().accounts !== null && this.stateValues().categories !== null) {
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
        })); // this.enformato = this.filterservice.preparaFiltersChip(event.filters, this.reemplazo); // }
    } // this.initData(this.namefilter());
    this.stateIni = true;
  }

  add = () => this.router.navigate(['/users/clientes/create']);

  getSexo = (sex: string): string => this.personasService.getSexo(sex);
}