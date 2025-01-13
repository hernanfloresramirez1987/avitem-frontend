import { Component, computed, effect, ElementRef, Signal, signal, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { MatchModel } from '../../../../_models/common/matchmodel.interface';
import { StateComprasResponseModel } from '../../../../_models/inventory/compras/comprasResponse.interface';
import { ComprasDTO } from '../../../../_models/dto/inventory/compras/compras.interface.dto';
import { ComprasBaseFilter } from '../../../../_models/dto/inventory/compras/comprasSearch.interface.dto';
import { tableconfig } from '../../../../config/table.config';
import { Column } from '../../../../_models/common/columns.interface';
import { ComprasService } from '../../../../_services/compras.service';
import { FilterApplyService } from '../../../../_services/common/filter.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateLanService } from '../../../../../layout/services/translate-lan.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-purchases',
  standalone: true,
  imports: [TableModule],
  templateUrl: './purchases.component.html',
  styleUrl: './purchases.component.scss'
})
export default class PurchasesComponent {
  @ViewChild('dt1') table!: Table;
  @ViewChild('filter') filter!: ElementRef;

  stateValues = signal<StateComprasResponseModel>({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  comprasdto = signal<ComprasDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ComprasBaseFilter }});

  tablecon: number[] = tableconfig.cantidadRegistros;
  stateIni = false;

  private allowedColumns: string[] = ['id', 'ci', 'nombre', 'app', 'apm', 'sexo', 'fnaci', 'idtipo', 'empresa', 'nit', 'direccion', 'telefono', 'email'];
  columns: string[] = this.allowedColumns;
  columnsSelectSignal: Signal<Column[]> = computed(() => this.columns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
    })));

  constructor(private comprasServ: ComprasService, private filterservice: FilterApplyService, private translate : TranslateService, private translateLanService : TranslateLanService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    effect(() => {
      this.comprasServ.postProductSearch(this.comprasdto())
        .pipe(map(t => {
          console.log("console.log('', t):   ", t);
          return { data: Array.isArray(t) ? [...t] : [], page: 0, rows: 0, total_records: 0, loaded: true, loading: false, error: null};
        }))
        .subscribe({
          next: t => {
            console.log({...this.comprasdto()});
            console.log(t);
            this.stateValues.set({ data: (t.data && t.data.length > 0) ? [...t.data] : [], page: 0, rows: 0, total_records: 0, loaded: true, loading: false, error: null });
          },
          error: (err) => this.stateValues.set({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: err })
        })
    })
  }

  clear = (table: Table) => {
    this.comprasdto.set({ config: { populate_data: false, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ComprasBaseFilter }})
    table.clear(); 
  }
}