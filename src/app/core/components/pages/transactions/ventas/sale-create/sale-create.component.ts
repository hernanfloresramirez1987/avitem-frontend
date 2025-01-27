import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SalesDetailWithNameProduct, SalesRegister } from '../../../../../_models/dto/inventory/ventas/ventasRegister.interface';
import { ProveedorItem } from '../../../../../_models/users/proveedores/proveedores.model';
import { ProductItem } from '../../../../../_models/inventory/products/product.model';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
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
import { EmployeesService } from '../../../../../_services/employees.service';
import { map, pipe } from 'rxjs';
import { EmployeeResp } from '../../../../../_models/users/employees/employeeResponse.interface';
import { EmployeeItem } from '../../../../../_models/users/employees/employee.model';
import { ClientsService } from '../../../../../_services/clients.service';
import { Router, RouterLink } from '@angular/router';
import { ClienteItem } from '../../../../../_models/users/clients/clientesSearch.model';

@Component({
  selector: 'app-sale-create',
  standalone: true,
  imports: [ReactiveFormsModule, CardModule, TranslateModule, InputTextModule, DropdownModule, InputGroupModule, ButtonModule, UpperCasePipe, DatePipe, CalendarModule, ButtonGroupModule, TableModule, ToastModule, ConfirmDialogModule, RouterLink, JsonPipe],
  providers: [DatePipe],
  templateUrl: './sale-create.component.html',
  styleUrl: './sale-create.component.scss'
})
export default class SaleCreateComponent {
  salesForm!: FormGroup;

  ventasRegister!: SalesRegister;
  clientes!: ClienteItem[];
  empleados!: EmployeeItem[];
  productos!: ProductItem[];

  detailView: SalesDetailWithNameProduct[] = [];
  
  stateInputs = signal<boolean>(true);
  currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
  total = 0;
  totalVenta = 0;

  constructor(private confirmationServ: ConfirmationService, private clientServ: ClientsService, private employeesServ: EmployeesService, private ventasServ: VentasService, private productosServ: ProductosService, private translate : TranslateService, private translateLanService: TranslateLanService, private fb: FormBuilder, private router: Router, private datePipe: DatePipe, private toastServ: ToastService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));

    this.salesForm = this.fb.group({
      fechaVenta: [this.currentDate],
      // total: [this.total],
      tokenSIN: [''],
      id_cliente: ['', [Validators.required]],
      id_empleado: ['', [Validators.required]],
      cantidad: [''],
      precioUnitario: [''],
      precioUnitarioVenta: [''],
      id_producto: [''],
    });

    this.productosServ.postProductsGet().subscribe(t => {
      this.productos = t.map(r => ({
        ...r,
        displayProduct: `${r.nombre} (${r.color}) - ${r.unidadMedida}`
      }));
      this.stateInputs.set(false);
    });
    
    this.clientServ.getAllClients().subscribe({
      next: (t) => { console.log(t); 
        this.clientes  = t.map(r => ({
          ...r,
          displayCliente: `${r.nombre} (${r.app}) ${r.apm}`
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
    const formValues = this.salesForm.value; console.log(String(this.datePipe.transform(this.getLastDateOfYear(new Date().getFullYear()), 'yyyy-MM-dd')));

    this.ventasRegister = {
      fechaVenta: String(this.datePipe.transform(new Date(), 'yyyy-MM-dd')),
      total: this.total,
      id_cliente: formValues.id_cliente.id,
      id_empleado: formValues.id_empleado.id,
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

  }

  addDetail(): void {
    if(!this.salesForm.value.id_producto) {
      alert('Debe de seleccionar producto para agregarlo. Por favor seleccione uno.');
      return;
    }
    const selectedProductId = Number(this.salesForm.value.id_producto.id);
    const productExists = this.detailView.some(detail => detail.id_producto === selectedProductId || this.salesForm.value.id_producto == '');
    if (productExists) { // Si el producto ya existe, muestra un mensaje de advertencia o notificación
      alert('Este producto ya ha sido agregado. Por favor selecciona otro.');
      return; // Sal del método para evitar agregar duplicados
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

  cleanAll() {}

  submitSales(): void {
    if (this.salesForm.valid) {
      const purchaseData = this.asignarValores();
      console.log(purchaseData);
      purchaseData.detalle = JSON.stringify(purchaseData.detalle);
      this.confirm(purchaseData);
    } else {
      console.error('Formulario inválido');
    }
  }

  confirm(saleData: SalesRegister) {
    this.confirmationServ.confirm({
      message: 'Are you sure you want to perform this action?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // Introducir un retraso de 3 segundos antes de procesar la confirmación
        this.ventasServ.postSaveVenta(saleData).subscribe({
          next: (t) => {
            console.log('Action confirmed!');
            if (t.CodigoEstado === "201") {
              this.notifySuccess();
                setTimeout(() => {
                  console.log('Venta registrada correctamente');
                  this.router.navigate(['/transactions/ventas']);
                }, 3000); // 3000 ms (3 segundos)
              } else {
                console.log(t);
              }
            },
            error: (e) => {
              console.error('Error al registrar la compra:', e);
            },
          });
      },
      reject: () => {
        console.log('Action rejected!');
      },
    });
  }
}
