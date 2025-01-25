import { Component, computed, effect, ElementRef, Signal, signal, ViewChild } from '@angular/core';
import { Table, TableLazyLoadEvent, TableModule, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { MatchModel } from '../../../../_models/common/matchmodel.interface';
import { StateComprasResponseModel } from '../../../../_models/inventory/compras/comprasResponse.interface';
import { ComprasDTO } from '../../../../_models/dto/inventory/compras/compras.interface.dto';
import { ComprasBaseFilter } from '../../../../_models/dto/inventory/compras/comprasSearch.interface.dto';
import { tableconfig } from '../../../../config/table.config';
import { Column } from '../../../../_models/common/columns.interface';
import { ComprasService } from '../../../../_services/compras.service';
import { FilterApplyService } from '../../../../_services/common/filter.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateLanService } from '../../../../../layout/services/translate-lan.service';
import { map } from 'rxjs';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { LibModule } from '../../../lib/lib.module';
import { RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';

import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-purchases',
  standalone: true,
  imports: [TableModule, CardModule, TagModule, ToastModule, RatingModule, ButtonModule, TranslateModule, UpperCasePipe, TableModule, ButtonModule, LibModule, RouterLink, CurrencyPipe],
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

  private allowedColumns: string[] = ['id', 'fechaCompra', 'total', 'proveedor'];
  columns: string[] = this.allowedColumns;
  columnsSelectSignal: Signal<Column[]> = computed(() => this.columns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
    })));

  constructor(private comprasServ: ComprasService, private filterservice: FilterApplyService, private translate : TranslateService, private translateLanService : TranslateLanService, private messageService: MessageService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    effect(() => {
      this.comprasServ.getCompras(this.comprasdto())
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
    });
  }

  clear = (table: Table) => {
    this.comprasdto.set({ config: { populate_data: false, page: 1, rows: 15, sort_field : []}, filter: { ...{} as ComprasBaseFilter }})
    table.clear(); 
  }

  getDataPaged(event: TableLazyLoadEvent) {
    if (event.filters && this.stateIni !== false) {
      // if (this.stateValues().accounts !== null && this.stateValues().categories !== null) {
      this.comprasdto.update(() => ({
        config: {
          populate_data: false,
          page: ((event.first || 0) / Number(event.rows)) + 1,
          sort_field: event.multiSortMeta ? event.multiSortMeta.filter(t => t.field) : [],
          rows: Number(event.rows),
        },
        filter: {
          ...this.filterservice.applyFilterNew(event.filters, this.comprasdto().filter),
        }
      }));
      // this.enformato = this.filterservice.preparaFiltersChip(event.filters, this.reemplazo);
      // }
    }
    // this.initData(this.namefilter());
    this.stateIni = true;
  }

    toggleMenuComplet_Processing($event: MouseEvent, order: any) {
      // this.menuCompProc.toggle($event);
      // this.currentorder = order;
      console.log($event, order);
    }





    ////////////////////
    products: any[] = [{
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      orders: [
        {
          id: '1000-1',
          productCode: 'f230fh0g3',
          date: '2020-09-13',
          amount: 65,
          quantity: 1,
          customer: 'David James',
          status: 'PENDING'
      }
    ]
  }];

    expandedRows = {};

    // constructor(private compraSerc: ProductService, private messageService: MessageService) {}

    ngOnInit() {
      // this.comprasServ.getCompras().then((data) => (this.products = data));
      this.comprasServ.getCompras(this.comprasdto())
        .pipe(map(t => {
          console.log("console.log('', t):   ", t);
          return { data: Array.isArray(t) ? [...t] : [], page: 0, rows: 0, total_records: 0, loaded: true, loading: false, error: null};
        }))
        .subscribe({
          next: t => {
            console.log({...this.comprasdto()});
            console.log(t);
            this.products = t.data
            this.stateValues.set({ data: (t.data && t.data.length > 0) ? [...t.data] : [], page: 0, rows: 0, total_records: 0, loaded: true, loading: false, error: null });
          },
          error: (err) => this.stateValues.set({ data: [], page: 0, rows: 0, total_records: 0, loaded: false, loading: true, error: err })
        })
    }

    expandAll() {
        this.expandedRows = this.products.reduce((acc, p) => (acc[p.id] = true) && acc, {});
    }

    collapseAll() {
        this.expandedRows = {};
    }

    onRowExpand(event: TableRowExpandEvent) {
        this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
    }

    onRowCollapse(event: TableRowCollapseEvent) {
        this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
    }
}