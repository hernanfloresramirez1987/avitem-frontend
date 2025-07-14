import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SalesDetailWithNameProduct, SalesRegister } from '../../../../../_models/dto/inventory/ventas/ventasRegister.interface';
import { ProductItem } from '../../../../../_models/inventory/products/product.model';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { ToastService } from '../../../../../_services/common/toast.service';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { VentasService } from '../../../../../_services/ventas.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProductosService } from '../../../../../_services/products.service';
import { EmployeesService } from '../../../../../_services/employees.service';
import { map } from 'rxjs';
import { EmployeeItem } from '../../../../../_models/users/employees/employee.model';
import { ClientsService } from '../../../../../_services/clients.service';
import { Router, RouterLink } from '@angular/router';
import { ClienteItem } from '../../../../../_models/users/clients/clientesSearch.model';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';

import { jsPDF } from "jspdf";
import { PdfReportService } from '@/core/_services/common/pdfreport.service';
import { CapitalizePipe } from '@/core/pipes/capital-letter.pipe';

@Component({
  selector: 'app-sale-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CardModule,
    TranslateModule,
    InputTextModule,
    SelectModule,
    InputGroupModule,
    ButtonModule,
    UpperCasePipe,
    DatePickerModule,
    ButtonGroupModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    RouterLink,
    CapitalizePipe
  ],
  providers: [DatePipe],
  templateUrl: './sale-create.component.html',
  styleUrl: './sale-create.component.scss'
})
export default class SaleCreateComponent {
  salesForm!: FormGroup;

  items: MenuItem[] | undefined;

  ventasRegister!: SalesRegister;
  clientes!: ClienteItem[];
  empleados!: EmployeeItem[];
  productos!: ProductItem[];

  producto = signal<ProductItem>({} as ProductItem);
  cliente = signal<ClienteItem>({} as ClienteItem);

  detailView: SalesDetailWithNameProduct[] = [];
  
  stateInputs = signal<boolean>(true);
  total = 0;
  totalVenta = 0;

  constructor(
    private readonly translateLanService: TranslateLanService, 
    private readonly translate : TranslateService, 
    private readonly toastServ: ToastService, 
    private readonly confirmationServ: ConfirmationService, 
    private readonly clientServ: ClientsService, 
    private readonly employeesServ: EmployeesService, 
    private readonly ventasServ: VentasService, 
    private readonly productosServ: ProductosService, 
    private readonly fb: FormBuilder, 
    private readonly router: Router, 
    private readonly datePipe: DatePipe, 
    private readonly pdfreport: PdfReportService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    
    this.salesForm = this.fb.group({
      fechaVenta: [Validators.required],
      // total: [this.total],
      tokenSIN: [''],
      id_cliente: ['', [Validators.required]],
      id_empleado: ['', [Validators.required]],
      cantidad: [''],
      precioUnitario: [''],
      precioUnitarioVenta: [''],
      id_producto: [''],
    });

    this.productosServ.postProductsGet().subscribe(t => { console.log(t)
      this.productos = t.map(r => ({
        ...r,
        displayProduct: `${r.nombre} (${r.color}) - ${r.unidadMedida}`
      }));
      this.stateInputs.set(false);
    });
    
    this.clientServ.getAllClients().subscribe({
      next: (t) => { 
        console.log(t); 
        this.clientes  = t.map(r => ({
          ...r,
          displayCliente: `${r.nombre} ${r.app} ${r.apm}`
        }));
      },
      error: (e) => console.log(e)
    });

    this.employeesServ.postEmployees(null)
      .pipe(map(t => {
        return { data: Array.isArray(t) ? [...t] : [], page: 0, rows: 0, total_records: 0, loaded: true, loading: false, error: null};
      }))
      .subscribe(t => {
        console.log(t);
        this.empleados = t.data.map(r => ({
            ...r,
            displayEmpleado: `${r.nombre} ${r.app} ${r.apm}, ${r.idcargo}`
          }));
          this.stateInputs.set(false);
      });
  }

  asignarValores(): SalesRegister { 
    const formValues = this.salesForm.value; // console.log(formValues);
    const fechaVenta = new Date(formValues.fechaVenta);
    const formattedFechaVenta = fechaVenta.toISOString().split("T")[0]; // console.log(String(this.datePipe.transform(this.getLastDateOfYear(new Date().getFullYear()), 'yyyy-MM-dd')));

    this.ventasRegister = {
      fechaVenta: formattedFechaVenta,
      total: this.total,
      id_cliente: +formValues.id_cliente.id,
      id_empleado: +formValues.id_empleado.id,
      confactura: 1,  // Nuevo campo requerido
      token_SIM: "tokenSIM",
      detalle: this.detailView.map((t: any) => {
        console.log(t);
        return {
          cantidad: t.cantidad,
          precioUnitario: t.precioUnitario,
          id_producto: t.id_producto,
          // color: t.id_producto
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

  changeTotalVenta() {
    const totalItem = this.salesForm.value.cantidad * this.salesForm.value.precioUnitario;
    console.log("totalVenta ", totalItem);
    this.totalVenta = totalItem;
  }

  addDetail(): void {
    if(!this.salesForm.value.id_producto) {
      alert('Debe de seleccionar producto para agregarlo. Por favor seleccione uno.');
      return;
    }
    const selectedProductId = Number(this.salesForm.value.id_producto.id);
    const productExists = this.detailView.some(detail => detail.id_producto === selectedProductId || this.salesForm.value.id_producto == '');
    if (productExists) {
      alert('Este producto ya ha sido agregado. Por favor selecciona otro.');
      return;
    }
    if(this.salesForm.value.cantidad > this.producto().cantidadStock) {
      alert('Error, la cantidad solicitada de ' + this.salesForm.value.cantidad + " items excede al stock de " + this.producto().cantidadStock + " en Almacenes");
      return;
    }

    this.detailView.push({
      name_product: this.salesForm.value.id_producto.nombre, // Ensure to include 'name_product'
      color: this.salesForm.value.id_producto.color,
      cantidad: Number(this.salesForm.value.cantidad),
      precioUnitario: Number(this.salesForm.value.precioUnitario),
      id_producto: Number(this.salesForm.value.id_producto.id) // Use get to access the control
    });
    console.log(this.detailView);
    this.funcTotal();
    this.cleanForms();
  }

  updateData() {
    console.log('updateData() { } ');
  }

  funcTotal() {
    this.total = this.detailView.reduce((acc, t) => {
      const cantidad = Number(t.cantidad) || 0; // Convierte a número, o 0 si no es válido
      const precioUnitario = Number(t.precioUnitario) || 0;
      return acc + (cantidad * precioUnitario);
    }, 0);
  }
  
  cleanForms() {
    this.salesForm.patchValue({ total: this.total, id_producto: '', cantidad: '', precioUnitario: '', precioVenta: '' }, { emitEvent: false });
    this.totalVenta = 0;
  }

  cleanAll() {
    console.log('cleanAll() { ... }')
  }

  submitSales(): void {
    if (this.salesForm.valid) {
      const purchaseData = this.asignarValores();
      console.log(purchaseData);
      purchaseData.detalle = JSON.stringify(purchaseData.detalle);
      this.confirmSave(purchaseData)
    } else {
      console.error('Formulario inválido');
    }
  }

  confirmDialogSave(message: string, header: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.confirmationServ.confirm({
        message,
        header,
        icon: 'pi pi-exclamation-triangle',
        accept: () => resolve(true),
        reject: () => resolve(false),
      });
    });
  }

  confirmDialogFactura(message: string, header: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.confirmationServ.confirm({
        message,
        header,
        icon: 'pi pi-exclamation-triangle',
        accept: () => resolve(true),
        reject: () => resolve(false),
      });
    });
  }

  saveRegisterSale = (saleData: SalesRegister)  => {
    const secondConfir: any = this.confirmDialogFactura('¿Se está procesando la venta, desea factura?', 'Confirmación Factura');
    this.ventasRegister.confactura = (secondConfir) ? 1 : 0;
    console.log(this.ventasRegister)
    console.log(saleData)
    this.ventasServ.postSaveVenta(saleData).subscribe({
      next: (t) => console.log(t),
      error: (e) => console.log(e),
    })
  }

  async confirmSave(saleData: SalesRegister) {
    this.ventasRegister = saleData;
  
    const firstConfirm = await this.confirmDialogSave('¿Estás seguro de registrar esta venta?', 'Confirmación');
    console.log(firstConfirm);
    let secondConfirm: any = null;
    if (firstConfirm) {
      // secondConfirm = await this.confirmDialogFactura('¿Se está procesando la venta, desea factura?', 'Confirmación Factura');
      this.saveRegisterSale(this.ventasRegister);
    } else {
      console.log('Primera confirmación cancelada.');
    }
    // console.log(secondConfirm);
    // if (firstConfirm && secondConfirm) {
    //   console.log('Generando factura:', this.ventasRegister.confactura);
    //   this.ventasRegister.confactura = 1;
    // } else {
    //   console.log('El usuario no quiere factura.');
    //   this.ventasRegister.confactura = 0;
    // }
    
    if (firstConfirm && secondConfirm) {
      this.generatePdf();
    }
  }

  generatePdf = () => {
    const doc = new jsPDF();

    const sampleData: any[] = [
      { product: 'Producto A', quantity: 2, price: 10, total: 20 },
      { product: 'Producto B', quantity: 1, price: 15, total: 15 },
      { product: 'Producto C', quantity: 3, price: 7, total: 21 },
    ];
    this.pdfreport.generatePdf(); // .generateSalesReport('Reporte de Ventas', sampleData, new Date());
  }

  changeClient({ value }: any) {
    console.log(value);
    const aux = value;
    this.cliente.set(aux);
  }
  changeProduct({ value }: any) {
    console.log(value);
    this.producto.set(value) as any;
  }

}
