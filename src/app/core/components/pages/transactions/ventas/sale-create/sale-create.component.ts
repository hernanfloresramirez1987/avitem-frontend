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

  ventasRegister!: SalesRegister;
  proveedores!: ProveedorItem[];
  productos!: ProductItem[];

  detailView: SalesDetailWithNameProduct[] = [];
  
  stateInputs = signal<boolean>(true);
  currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
  total = 0;
  totalVenta = 0;

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

  asignarValores(): SalesRegister {
    const formValues = this.salesForm.value;
    console.log(String(this.datePipe.transform(this.getLastDateOfYear(new Date().getFullYear()), 'yyyy-MM-dd')));

    this.ventasRegister = {
      fechaVenta: String(this.datePipe.transform(new Date(), 'yyyy-MM-dd')),
      total: this.total,
      confactura: true,  // Nuevo campo requerido
      token_SIN: "123456",
      id_cliente: formValues.id_cliente.id,
      id_empleado: formValues.id_empleado.id,
      detalle: this.detailView.map((t: any) => {
        console.log(t);
        return {
          cantidad: t.cantidad,
          precioUnitarioVent: t.precioUnitario,
          precioUnitVenta: t.precioUnitarioVent,
          id_producto: t.id_producto,
        };
      })
    };
      // fechaVencimiento: String(this.datePipe.transform(this.getLastDateOfYear(new Date().getFullYear()), 'yyyy-MM-dd')),
      
    console.log('console.log(this.comprasRegister);\n ', this.ventasRegister);
    return this.ventasRegister;
  }

  getLastDateOfYear(year: number): Date {
    return new Date(year, 11, 31); // Diciembre (mes 11), día 31
  }

  notifySuccess() {
    this.toastServ.showSuccess('Operation Successful', 'The action was completed successfully.');
  }

  notifyError() {
    this.toastServ.showError('Operation Failed', 'An error occurred while processing the action.');
  }

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

  deleteDetail(item: SalesDetailWithNameProduct): void {
    this.detailView = this.detailView.filter(detail => detail !== item);
    this.funcTotal();
    this.cleanForms();
  }

  updateData() {
    console.log('updateData() { } ');
  }

  funcTotal() {
    this.total = this.detailView.reduce((acc, t) => {
      const cantidad = Number(t.cantidad) || 0; // Convierte a número, o 0 si no es válido
      const precioUnitario = Number(t.precioUnitarioVent) || 0;
      return acc + (cantidad * precioUnitario);
    }, 0);
  }
  
  cleanForms() {
    this.salesForm.patchValue({ total: this.total, id_producto: '', cantidad: '', precioUnitario: '', precioVenta: '' }, { emitEvent: false });
    this.totalVenta = 0;
  }
}
