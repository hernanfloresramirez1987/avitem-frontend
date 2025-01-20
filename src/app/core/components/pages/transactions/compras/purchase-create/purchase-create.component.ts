import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CalendarModule } from 'primeng/calendar';
import { PurcharseDetailWithNameProduct, PurcharseRegister } from '../../../../../_models/dto/inventory/compras/comprasRegister.interface';
import { TranslateLanService } from '../../../../../../layout/services/translate-lan.service';
import { ProveedorItem } from '../../../../../_models/users/proveedores/proveedores.model';
import { ProveedoresService } from '../../../../../_services/proveedors.service';
import { debounceTime } from 'rxjs';
import { ComprasService } from '../../../../../_services/compras.service';
import { ProductosService } from '../../../../../_services/products.service';
import { ProductItem } from '../../../../../_models/inventory/products/product.model';
import { TableModule } from 'primeng/table';
import { ToastService } from '../../../../../_services/common/toast.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-purchase-create',
  standalone: true,
  imports: [ReactiveFormsModule, CardModule, TranslateModule, InputTextModule, DropdownModule, InputGroupModule, ButtonModule, UpperCasePipe, JsonPipe, CalendarModule, ButtonGroupModule, TableModule, ToastModule, ConfirmDialogModule],
  providers: [DatePipe],
  templateUrl: './purchase-create.component.html',
  styleUrl: './purchase-create.component.scss'
})

export default class PurchaseCreateComponent {
  purchaseForm!: FormGroup;

  comprasRegister!: PurcharseRegister;
  proveedores!: ProveedorItem[];
  productos!: ProductItem[];

  // detail: PurcharseDetail[] = [];
  detailView: PurcharseDetailWithNameProduct[] = [];
  
  stateInputs = signal<boolean>(true);
  currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
  total = 0;
  totalCompra = 0;

  constructor(private confirmationServ: ConfirmationService, private comprasServ: ComprasService, private productosServ: ProductosService, private translate : TranslateService, private proveedoresServ: ProveedoresService, private translateLanService: TranslateLanService, private fb: FormBuilder, private router: Router, private datePipe: DatePipe, private toastServ: ToastService) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    
    this.purchaseForm = this.fb.group({
      fechaCompra: [this.currentDate],
      total: [this.total],
      id_proveedor: ['', [Validators.required]], // detalle: this.fb.array([]),
      cantidad: [''],
      precioUnitario: [''],
      precioVenta: [''],
      id_producto: [''],
    });

    this.proveedoresServ.postProveedoresSearch(null).subscribe({
      next: (response) => this.proveedores = response,
      error: (err) => console.error('Error al obtener proveedores:', err)
    });
  } // get detalle(): FormArray { //   return this.purchaseForm.get('detalle') as FormArray; // }

  addDetail(): void {
    if(!this.purchaseForm.value.id_producto) {
      alert('Debe de seleccionar producto para agregarlo. Por favor seleccione uno.');
      return;
    }
    const selectedProductId = Number(this.purchaseForm.value.id_producto.id);
    const productExists = this.detailView.some(detail => detail.id_producto === selectedProductId || this.purchaseForm.value.id_producto == '');
    if (productExists) { // Si el producto ya existe, muestra un mensaje de advertencia o notificación
      alert('Este producto ya ha sido agregado. Por favor selecciona otro.');
      return; // Sal del método para evitar agregar duplicados
    }

    this.detailView.push({
      cantidad: Number(this.purchaseForm.value.cantidad),
      precioUnitario: Number(this.purchaseForm.value.precioUnitario),
      precioVenta: Number(this.purchaseForm.value.precioVenta),
      id_producto: Number(this.purchaseForm.value.id_producto.id), // Use get to access the control
      name_product: this.purchaseForm.value.id_producto.nombre, // Ensure to include 'name_product'
      color: this.purchaseForm.value.id_producto.color
    });
    this.funcTotal();
    this.cleanForms();
  }

  funcTotal() {
    this.total = this.detailView.reduce((acc, t) => {
      const cantidad = Number(t.cantidad) || 0; // Convierte a número, o 0 si no es válido
      const precioUnitario = Number(t.precioUnitario) || 0;
      return acc + (cantidad * precioUnitario);
    }, 0);
  }
  
  cleanForms() {
    this.purchaseForm.patchValue({ total: this.total, id_producto: '', cantidad: '', precioUnitario: '', precioVenta: '' }, { emitEvent: false });
    this.totalCompra = 0;
  }

  updateDetail(item: PurcharseDetailWithNameProduct) {
    this.purchaseForm.patchValue({ id_producto: '', cantidad: '', precioUnitario: '' }, { emitEvent: true });
  }

  changeProvider() {
    this.productosServ.postProductscProveedor(this.purchaseForm.value.id_proveedor.id).subscribe(t => {
      this.productos = t.map(producto => ({
        ...producto,
        display: `${producto.nombre} (${producto.color})  , ${producto.color} - ${producto.unidadMedida}`
      }));;
      console.log(t)
      this.stateInputs.set(false);
    });
  }

  changeTotalCompra() {
    console.log('this.totalCompra: '); //, this.totalCompra);
    this.totalCompra = this.purchaseForm.value.cantidad * this.purchaseForm.value.precioUnitario;
  }

  submitPurchase(): void {
    if (this.purchaseForm.valid) {
      const purchaseData = this.asignarValores();
      console.log(purchaseData);
      purchaseData.detalle = JSON.stringify(purchaseData.detalle);
      this.confirm(purchaseData);
    } else {
      console.error('Formulario inválido');
    }
  }

  asignarValores(): PurcharseRegister {
    const formValues = this.purchaseForm.value;
    console.log(String(this.datePipe.transform(this.getLastDateOfYear(new Date().getFullYear()), 'yyyy-MM-dd')));

    this.comprasRegister = {
      fechaCompra: String(this.datePipe.transform(new Date(), 'yyyy-MM-dd')),
      total: this.total,
      id_proveedor: formValues.id_proveedor.id,
      detalle: this.detailView.map((t: any) => {
        console.log(t);
        return {
          cantidad: t.cantidad, // Asegúrate de que 't' sea un elemento de PurcharseDetail
          precioUnitario: t.precioUnitario, // Accede a 'precioUnitario' de 't'
          precioVenta: t.precioVenta,
          id_producto: t.id_producto // Asegúrate de que 'id_producto' esté definido
        };
      }),
      fechaVencimiento: String(this.datePipe.transform(this.getLastDateOfYear(new Date().getFullYear()), 'yyyy-MM-dd')),
      
    };
    console.log('console.log(this.comprasRegister);\n ', this.comprasRegister);
    return this.comprasRegister;
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

  // confirm(purchaseData: PurcharseRegister) {
  //   this.confirmationServ.confirm({
  //     message: 'Are you sure you want to perform this action?',
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.comprasServ.postCompras(purchaseData).subscribe({
  //         next: (t) => {
  //           console.log('Action confirmed!');
  //           if(t.CodigoEstado === "201") {
  //             this.notifySuccess();
  //             console.log('hola');
  //             this.router.navigate(['/transactions/compras']);
  //           } else {
  //             console.log(t);
  //           }
  //         }, error: (e) => {
  //           console.error('Error al registrar la compra:', e);
  //         }
  //       });
  //     },
  //     reject: () => {
  //       console.log('Action rejected!');
  //     },
  //   });
  // }

  confirm(purchaseData: PurcharseRegister) {
    this.confirmationServ.confirm({
      message: 'Are you sure you want to perform this action?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // Introducir un retraso de 3 segundos antes de procesar la confirmación
        this.comprasServ.postCompras(purchaseData).subscribe({
          next: (t) => {
            console.log('Action confirmed!');
            if (t.CodigoEstado === "201") {
              this.notifySuccess();
                setTimeout(() => {
                  console.log('Compra registrada correctamente');
                  this.router.navigate(['/transactions/compras']);
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

  deleteDetail(item: PurcharseDetailWithNameProduct): void {
    this.detailView = this.detailView.filter(detail => detail !== item);
    this.funcTotal();
    this.cleanForms();
  }

  updateData() {
    console.log('updateData() { } ');
  }
}
