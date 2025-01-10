import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PurcharseDetail, PurcharseRegister } from '../../../../../_models/dto/inventory/compras/comprasRegister.interface';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateLanService } from '../../../../../../layout/services/translate-lan.service';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ProveedorItem } from '../../../../../_models/users/proveedores/proveedores.model';
import { ProveedoresService } from '../../../../../_services/proveedors.service';
import { CalendarModule } from 'primeng/calendar';
import { debounceTime } from 'rxjs';
import { ComprasService } from '../../../../../_services/compras.service';
import { ProductosService } from '../../../../../_services/products.service';
import { ProductItem } from '../../../../../_models/inventory/products/product.model';

@Component({
  selector: 'app-purchase-create',
  standalone: true,
  imports: [ReactiveFormsModule, CardModule, TranslateModule, InputTextModule, DropdownModule, InputGroupModule, ButtonModule, UpperCasePipe, JsonPipe, CalendarModule],
  providers: [DatePipe],
  templateUrl: './purchase-create.component.html',
  styleUrl: './purchase-create.component.scss'
})

export default class PurchaseCreateComponent implements OnInit {
  purchaseForm!: FormGroup;

  comprasRegister!: PurcharseRegister;
  proveedores!: ProveedorItem[];
  productos!: ProductItem[];

  constructor(private comprasServ: ComprasService, private productosServ: ProductosService, private translate : TranslateService, private proveedoresServ: ProveedoresService, private translateLanService: TranslateLanService, private fb: FormBuilder, private router: Router, private datePipe: DatePipe) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    const currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    this.purchaseForm = this.fb.group({
      fechaCompra: [currentDate, { disabled: true }],
      total: [0, { disabled: true}],
      id_proveedor: ['', [Validators.required]],
      detalle: this.fb.array([]),
    });

    this.proveedoresServ.postProveedoresSearch(null).subscribe({
      next: (response) => {
        console.log(response); // Revisa cómo viene la respuesta
        this.proveedores = response;
        console.log(this.proveedores);
      },
      error: (err) => console.error('Error al obtener proveedores:', err)
    });
  }

  ngOnInit(): void { console.log(9999);
    this.purchaseForm.valueChanges/*.pipe(debounceTime(5000))*/.subscribe(t => this.calculateTotal(t));
  }

  // Calcular el total dinámicamente
  private calculateTotal(t: any): void {
    let total = 0;
    for (let i = 0; i < t.detalle.length; i++) {
      total += t.detalle[i].cantidad * t.detalle[i].precioUnitario;
    }
    console.log(total);

    // Actualizar el campo `total` en el formulario
    this.purchaseForm.patchValue({ total: total }, { emitEvent: false });
  }

  get detalle(): FormArray {
    return this.purchaseForm.get('detalle') as FormArray;
  }

  addDetail(): void {
    const detailGroup = this.fb.group({
      cantidad: ['', [Validators.required, Validators.min(1)]],
      precioUnitario: ['', [Validators.required, Validators.min(0.01)]],
      id_producto: [null, Validators.required],
    });

    this.detalle.push(detailGroup);
  }

  removeDetail(index: number): void {
    this.detalle.removeAt(index);
  }

  changeProvider() { // console.log('console.log(this.purchaseForm.value.id_proveedor);\n', this.purchaseForm.value.id_proveedor.id);
    this.productosServ.postProductscProveedor(this.purchaseForm.value.id_proveedor.id).subscribe(t => {
      this.productos = t;
    });
  }

  submitPurchase(): void {
    if (this.purchaseForm.valid) {
      const purchaseData = this.asignarValores();
      
      purchaseData.detalle = JSON.stringify(purchaseData.detalle);
      
      this.comprasServ.postProduct(purchaseData).subscribe({
        next: (t) => {
          if(t.CodigoEstado === "201") {
            this.router.navigate(['/transactions/compras']);
          }
        }, error: (e) => {
          console.error('Error al registrar la compra:', e);
        }
      });
    } else {
      console.error('Formulario inválido');
    }
  }

  asignarValores(): PurcharseRegister {
    const formValues = this.purchaseForm.value;

    this.comprasRegister = {
      fechaCompra: formValues.fechaCompra,
      total: formValues.total,
      id_proveedor: formValues.id_proveedor.id,
      detalle: formValues.detalle.map((t: any) => {
        return {
          cantidad: t.cantidad, // Asegúrate de que 't' sea un elemento de PurcharseDetail
          precioUnitario: t.precioUnitario, // Accede a 'precioUnitario' de 't'
          id_producto: t.id_producto.id // Asegúrate de que 'id_producto' esté definido
        };
      })
    };
    console.log('console.log(this.comprasRegister);\n ', this.comprasRegister);
    return this.comprasRegister;

  }
}
