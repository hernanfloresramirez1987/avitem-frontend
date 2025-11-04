import { CardModule } from 'primeng/card';
import { Column } from '@/core/_models/common/columns.interface';
import { VentasItem } from '@/core/_models/inventory/ventas/ventas.model';
import { ArrayutilService } from '@/core/_services/common/arrayutil.service';
import { PdfReportService } from '@/core/_services/common/pdfreport.service';
import { DatePipe, DecimalPipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component, computed, effect, input, Input, OnInit, signal, Signal } from '@angular/core';
import jsPDF from 'jspdf';
import { MultiSelectChangeEvent, MultiSelectSelectAllChangeEvent } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { VentasService } from '@/core/_services/ventas.service';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VentasResponse } from '@/core/_models/dto/inventory/ventas/ventasResponse.interface';

@Component({
  selector: 'app-detailventa',
  imports: [CardModule, TableModule, DecimalPipe],
  templateUrl: './detailventa.component.html',
  styleUrl: './detailventa.component.scss'
})
export default class DetailventaComponent {
  id: string | null = null;

  columnsSelectSignal2: Signal<any> = computed(() => this.columns
    .map(columnName => ({
      field: columnName,
      header: columnName.charAt(0).toUpperCase() + columnName.slice(1)
    })));

  detalle = input<any[]>([]);
  title: string = "labels.detailventas";
  subtitle: string = "labels.sub title detailventas";
  totalGeneral = 0;
  private readonly allowedColumns: string[] = ['id', 'no', 'fechaVenta', 'total', 'cliente', 'ci', 'nit'];
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

  selectedItemId: VentasResponse | null = null;

  private readonly keylocalColumn = "sales_cols";

  constructor(
    private readonly ventasServ: VentasService,
    private readonly pdfreport: PdfReportService,
    private readonly arrayurilservice: ArrayutilService,
    private readonly router: Router, 
    private readonly route: ActivatedRoute,
    private readonly translateLanService: TranslateLanService, 
    private readonly translate : TranslateService) {
      if(this.route.snapshot.paramMap.get('id')){
      this.id = this.route.snapshot.paramMap.get('id');
    }
      this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
      effect(() => {
        if(this.id) {
          console.log(this.id)
          this.ventasServ.getOneVenta(+this.id)
            .subscribe(t => {
              console.log(t);
              this.selectedItemId = t;
            })
        }
      })
    }

  generatePdf = (data: VentasItem, detaildata: any[]) => {
    const doc = new jsPDF();
    console.log(detaildata); console.log(data);
    this.pdfreport.generatePdf(data, detaildata); //this.getDetVentas(this.selectedItemId as number);
  }

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
