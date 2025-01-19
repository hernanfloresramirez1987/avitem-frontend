import { Component, computed, effect, ElementRef, Signal, signal, ViewChild } from '@angular/core';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { tableconfig } from '../../../../config/table.config';
import { Column } from '../../../../_models/common/columns.interface';
import { StateProductResponseModel } from '../../../../_models/inventory/products/productResponse.interface';
import { MatchModel } from '../../../../_models/common/matchmodel.interface';
import { ProductoDTO } from '../../../../_models/dto/inventory/products/producto.interface.dto';
import { ProductoBaseFilter } from '../../../../_models/dto/inventory/products/productosSearch.interface.dto';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LibModule } from '../../../lib/lib.module';
import { FilterApplyService } from '../../../../_services/common/filter.service';
import { ProductosService } from '../../../../_services/products.service';
import { TranslateLanService } from '../../../../../layout/services/translate-lan.service';
import { map } from 'rxjs';
import { RouterLink } from '@angular/router';
import { ExternapiService } from '../../../../_services/externapi.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe, TableModule, ButtonModule, LibModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {
  @ViewChild('dt1') table!: Table;
  @ViewChild('filter') filter!: ElementRef;

  stateValues = signal<StateProductResponseModel>({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  productsdto = signal<ProductoDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ProductoBaseFilter }});

  tablecon: number[] = tableconfig.cantidadRegistros;
  stateIni = false;

  private allowedColumns: string[] = ['id', 'nombre', 'codigoProducto', 'empresa', 'descripcion', 'cantidadStock', 'fechaIngreso', 'unidadMedida',  'state', 'categoria'];
  columns: string[] = this.allowedColumns;
  columnsSelectSignal: Signal<Column[]> = computed(() => this.columns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
    })));

    constructor(private productsServ: ProductosService, private filterservice: FilterApplyService, private translate : TranslateService, private translateLanService : TranslateLanService,
      private externapiServ: ExternapiService
    ) {
      this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
      effect(() => {
        this.productsServ.postProductsGet(this.productsdto())
          .pipe(map(t => {
            console.log("console.log('', t):   ", t);
            return { data: Array.isArray(t) ? [...t] : [], page: 0, rows: 0, total_records: 0, loaded: true, loading: false, error: null};
          }))
          .subscribe({
            next: t => {
              console.log({...this.productsdto()});
              console.log(t);
              this.stateValues.set({ data: (t.data && t.data.length > 0) ? [...t.data] : [], page: 0, rows: 0, total_records: 0, loaded: true, loading: false, error: null });
            },
            error: (err) => this.stateValues.set({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: err })
          })
      });
    }

  clear = (table: Table) => {
    this.productsdto.set({ config: { populate_data: false, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ProductoBaseFilter }})
    table.clear(); 
  }
    
  getDataPaged(event: TableLazyLoadEvent) {
    if (event.filters && this.stateIni !== false) {
      // if (this.stateValues().accounts !== null && this.stateValues().categories !== null) {
        this.productsdto.update(() => ({
          config: {
            populate_data: false,
            page: ((event.first || 0) / Number(event.rows)) + 1,
            sort_field: event.multiSortMeta ? event.multiSortMeta.filter(t => t.field) : [],
            rows: Number(event.rows),
          },
          filter: {
            ...this.filterservice.applyFilterNew(event.filters, this.productsdto().filter),
          }
        }));
        // this.enformato = this.filterservice.preparaFiltersChip(event.filters, this.reemplazo);
      // }
    }
    // this.initData(this.namefilter());
    this.stateIni = true;
  }


  goBuilderMaker = () => this.externapiServ.postComponentsRedirecctions(null).subscribe(t => t)
}
