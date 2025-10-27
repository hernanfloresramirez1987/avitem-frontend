import { Component, computed, effect, ElementRef, Signal, signal, viewChild } from '@angular/core';
import { Table, TableLazyLoadEvent, TableModule } from 'primeng/table';
import { tableconfig } from '../../../../config/table.config';
import { Column } from '../../../../_models/common/columns.interface';
import { Menu } from 'primeng/menu';
import { StateProductResponseModel } from '../../../../_models/inventory/products/productResponse.interface';
import { MatchModel } from '../../../../_models/common/matchmodel.interface';
import { ProductoDTO } from '../../../../_models/dto/inventory/products/producto.interface.dto';
import { ProductoBaseFilter } from '../../../../_models/dto/inventory/products/productosSearch.interface.dto';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, JsonPipe, UpperCasePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LibModule } from '../../../lib/lib.module';
import { FilterApplyService } from '../../../../_services/common/filter.service';
import { ProductosService } from '../../../../_services/products.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { ExternapiService } from '../../../../_services/externapi.service';
import { CardModule } from 'primeng/card';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { FilterInputComponent } from '@/core/components/lib/filter-input/filter-input.component';
import { ProductItem } from '@/core/_models/inventory/products/product.model';
import { MultiSelectChangeEvent, MultiSelectModule, MultiSelectSelectAllChangeEvent } from 'primeng/multiselect';
import { ArrayutilService } from '@/core/_services/common/arrayutil.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TranslateModule, CardModule, UpperCasePipe, TableModule, ButtonModule, LibModule, FilterInputComponent, CommonModule, MultiSelectModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {
  table = viewChild<Table>('dt1');
  menu = viewChild<Menu>('menu');
  filter = viewChild<ElementRef>('filter');
  stateValues = signal<StateProductResponseModel>({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  productsdto = signal<ProductoDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ProductoBaseFilter }});
  tablecon: number[] = tableconfig.cantidadRegistros;
  stateIni = false;
  title: string = 'pages.products';
  private readonly allowedColumns: string[] = ['id', 'nombre', 'codigoProducto', 'empresa', 'cantidadStock', 'fechaIngreso', 'unidadMedida',  'state', 'categoria'];
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

  private readonly keylocalColumn = "products_cols";

    constructor(
      private readonly productsServ: ProductosService, 
      private readonly filterservice: FilterApplyService, 
      private readonly translate : TranslateService, 
      private readonly translateLanService : TranslateLanService, 
      private readonly externapiServ: ExternapiService, 
      private readonly router: Router, 
      private readonly arrayurilservice: ArrayutilService) {
      this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
      effect(() => {
        // this.productsServ.postProductsGet(this.productsdto())
        this.productsServ.postProductsGet()
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
    if (event.filters && this.stateIni !== false) { // if (this.stateValues().accounts !== null && this.stateValues().categories !== null) {
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
        })); // this.enformato = this.filterservice.preparaFiltersChip(event.filters, this.reemplazo); // }
    } // this.initData(this.namefilter());
    this.stateIni = true;
  } // goBuilderMaker = () => this.externapiServ.postComponentsRedirecctions(null).subscribe(t => t)


  getColorBackground(code: string): string {
    switch (code) {
      case 'Natural':
        return '#cccccc'; // Beige (Natural)
      case 'Champan':
        return '#FBE7C6'; // Color Champán
      case 'Negro':
        return '#000000'; // Negro
      case 'Madera':
        return '#8B4513'; // Color Madera (Marrón)
      default:
        return '#FFFFFF'; // Color blanco predeterminado
    }
  }

  getColor(code: string): string {
    switch (code) {
      case 'Natural':
        return '#000000'; // Beige (Natural)
      case 'Champan':
        return '#000000'; // Color Champán
      case 'Negro':
        return '#FFFFFF'; // Negro
      case 'Madera':
        return '#FFFFFF'; // Color Madera (Marrón)
      default:
        return '#FFFFFF'; // Color blanco predeterminado
    }
  }

  add = () => {
    this.router.navigate(['/inventory/products/create']);
  }

  rowClass(product: any) {
    return { '!bg-red-50 !text-red-800': product.cantidadStock <= 5 };
  }

  // rowStyle(product: any) {
  //     if (product.cantidadStock <= 20) {
  //         return { fontWeight: 'bold', fontStyle: 'italic' };
  //     }
  // }
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
