import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, Input, OnInit, Signal, signal, input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { MatchModel } from 'src/app/core/_models/common/matchmodel.interface';
import { ReturnDetailBase, ReturnDetailDTO } from 'src/app/core/_models/dto/inbound/return/detail/detail-return.dto';
import { Return } from 'src/app/core/_models/inbound/return/return';
import { ReturnDetailItem } from 'src/app/core/_models/inbound/return/returndet/returndetail.interface';
import { StateReturnDetailResponseModel } from 'src/app/core/_models/inbound/return/returndet/returndetailResponse.inteface';
import { Column } from 'src/app/core/_models/outbound/state-outbount.model';
import { TranslateLanModule } from 'src/app/core/_modules/translate-lan.module';
import { ObjectsutilService } from 'src/app/core/_services/common/objectsutil.service';
import { ReturnDetailService } from 'src/app/core/_services/returndetail/returndetail.service';
import { TranslateLanService } from 'src/app/core/_services/translate-lan.service';

@Component({
  selector: 'app-return-details',
  standalone: true,
  imports: [TableModule, 
    TranslateLanModule,
    TagModule,
    UpperCasePipe
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsReturnComponent implements OnInit {
  data = input<ReturnDetailItem>();
  loading: boolean = true;

  stateDetailValues = signal<StateReturnDetailResponseModel>({ data: [], meta_data: { page: 1, rows: 15, total_records: 0 }, status: [], loaded: false, loading: true, error: null});
  searchTxt = signal<Array<MatchModel>>([]);
  returndetaildto = signal<ReturnDetailDTO>({ config: { populate_data: true, page: 1, rows: 15, sort_field: [] }, filter: {} as ReturnDetailBase});


  private allowedColumns: string[] = ['ship', 'return_tag', 'status', 'image', 'sku', 'barcode', 'description', 'return_qty', 'received_qty', 'location', 'lpn', 'kardex', 'category'];
  columns: string[] = this.allowedColumns;
  //columnsSelect: any[] = [];
  columnsSelect: Column[] = this.columns
  .map(columnName => ({
    field: columnName,
    header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
  }));
  colsOptionsSelect: Column[] = this.allowedColumns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
  }));
  columnsSelectSignal: Signal<Column[]> = computed(() => this.columns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
    })));

  constructor(private returndetailservice: ReturnDetailService, private objectutilservice: ObjectsutilService, private translate: TranslateService, private translateLanService: TranslateLanService) {
    this.translateLanService.changeLanguage$.subscribe(lan => this.translate.use(lan));
    console.log(this.columnsSelectSignal());
    //this.columnsd = [{field: "return_id", header: "return_id"}];
    effect(() => {
      this.returndetailservice.getReturnDetailData(this.returndetaildto())
      .subscribe({
        next: (data) => { console.log(data);
          this.stateDetailValues.set({ data: data.data, meta_data: { page: 1, rows: 15, total_records: 0 }, status: [], loaded: false, loading: true, error: null});
          //console.log("search", JSON.stringify(this.searchd));
          /*this.detalle = data as ReturnDetailResponse;
          console.log("detalle", this.detalle.details.data);
          if (!this.detalle.details.data) {
            this.detalle.details.data = [];
          }*/
          this.loading = false;
        }
      });
    });
  }

  ngOnInit(): void {
    if (this.data()?.return_id) {
      this.clearsearchd();
      this.returndetaildto.set(({ config: { populate_data: true, page: 1, rows: 15, sort_field: [] }, filter: { return_id: {match_mode: "contains", value: this.data()?.return_id } } as ReturnDetailBase}));
    }
  }
  detalle = {} as ReturnDetailItem;
//  searchd = {} as ReturnDetailFilter;
  columnsd: any[] = [];

  clearsearchd() {
    /*this.searchd = {
      return_id: 0,
      config: {
        page: 1,
        rows: 15,
        sort_field: [],
        populate_data: true
      },
      filter: {
        return_id: { value: "", match_mode: "" },
        sku: { value: "", match_mode: "" },
        qty: { value: "", match_mode: "" },
        qty_received: { value: "", match_mode: "" },
        po: { value: "", match_mode: "" },
        status: { value: "", match_mode: "" },
        id: { value: "", match_mode: "" },
        return_qty: { value: "", match_mode: "" },
        type_return: { value: "", match_mode: "" },
        request_date: { value: "", match_mode: "" },
        product_desc: { value: "", match_mode: "" },
      }

    }*/
  }
}
