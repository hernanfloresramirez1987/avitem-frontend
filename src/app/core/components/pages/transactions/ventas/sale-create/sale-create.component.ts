import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SalesDetailWithNameProduct, SalesRegister } from '../../../../../_models/dto/inventory/ventas/ventasRegister.interface';
import { ProveedorItem } from '../../../../../_models/users/proveedores/proveedores.model';
import { ProductItem } from '../../../../../_models/inventory/products/product.model';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { ToastService } from '../../../../../_services/common/toast.service';
import { ConfirmationService } from 'primeng/api';
import { VentasService } from '../../../../../_services/ventas.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProductosService } from '../../../../../_services/products.service';
import { TranslateLanService } from '../../../../../../layout/services/translate-lan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-create',
  standalone: true,
  imports: [ReactiveFormsModule, CardModule, TranslateModule, InputTextModule, DropdownModule, InputGroupModule, ButtonModule, UpperCasePipe, DatePipe, CalendarModule, ButtonGroupModule, TableModule, ToastModule, ConfirmDialogModule],
  providers: [DatePipe],
  templateUrl: './sale-create.component.html',
  styleUrl: './sale-create.component.scss'
})
export default class SaleCreateComponent {
  salesForm!: FormGroup;

  comprasRegister!: SalesRegister;
  proveedores!: ProveedorItem[];
  productos!: ProductItem[];

  detailView: SalesDetailWithNameProduct[] = [];
  
  stateInputs = signal<boolean>(true);
  currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
  total = 0;

  constructor(private confirmationServ: ConfirmationService, private ventasServ: VentasService, private productosServ: ProductosService, private translate : TranslateService, private translateLanService: TranslateLanService, private fb: FormBuilder, private router: Router, private datePipe: DatePipe, private toastServ: ToastService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));

    this.salesForm = this.fb.group({
      fechaVenta: [this.currentDate],
      total: [this.total],
      tokenSIN: [''],
      id_cliente: ['', [Validators.required]],
      id_empleado: ['', [Validators.required]],
      cantidad: [''],
      precioUnitario: [''],
      id_producto: [''],
    });
  }

}
