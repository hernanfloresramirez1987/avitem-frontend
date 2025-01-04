import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateLanService } from '../../../../../../layout/services/translate-lan.service';
import { Router } from '@angular/router';
import { DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { TranslateLanModule } from '../../../../../_modules/translate-lan.module';
import { CategoriasService } from '../../../../../_services/categorias.service';
import { ProveedoresService } from '../../../../../_services/proveedors.service';
import { ProveedorItem } from '../../../../../_models/users/proveedores/proveedores.model';
import { ProveedorDTO } from '../../../../../_models/dto/users/proveedors/proveedor.interface.dto';
import { ProductosService } from '../../../../../_services/products.service';
import { ProductoRegister } from '../../../../../_models/dto/inventory/products/productoRegister.interface';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, InputTextModule, DropdownModule, ButtonModule, CalendarModule, CheckboxModule, TranslateLanModule, UpperCasePipe, JsonPipe],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export default class ProductCreateComponent {
  registroForm: FormGroup;
  categorias!: { id: number, nombre: string, descripcion: string }[];
  proveedores!: ProveedorItem[];
  proveedorDto!: ProveedorDTO;

  productoRegister!: ProductoRegister;

  constructor(private categoriasServ: CategoriasService, private proveedoresServ: ProveedoresService, private productosServ: ProductosService, private translate : TranslateService, private translateLanService : TranslateLanService, private fb: FormBuilder, private router: Router){
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    // const currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');

    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: [''],
      // cantidadStock: ['', Validators.required],
      fechaIngreso: [new Date(), Validators.required],
      unidadMedida: ['', Validators.required],
      codigoProducto: ['', Validators.required],
      id_proveedor: ['', Validators.required],
      id_categoria: ['', Validators.required]
    });

    this.proveedoresServ.postProveedoresSearch(this.proveedorDto).subscribe({
      next: (response) => {
        console.log(response); // Revisa cómo viene la respuesta
        this.proveedores = response;
        console.log(this.proveedores);
      },
      error: (err) => console.error('Error al obtener proveedores:', err)
    });

    this.categoriasServ.getAll().subscribe(t => {
      this.categorias = t;
    });
  }

  saveProcto() {
    //productosServ
    console.log(this.asignarValores());
    this.productosServ.postProduct(this.asignarValores()).
      subscribe(t => {
        if(t.CodigoEstado === "201") {
          this.router.navigate(['inventory/products']);
        }
      });
  }

  asignarValores(): ProductoRegister {
    const formValues = this.registroForm.value;

    return this.productoRegister = {
      p_nombre: formValues.nombre,
      p_descripcion: formValues.descripcion,
      p_cantidadStock: 0,
      p_fechaIngreso: formValues.fechaIngreso,
      p_unidadMedida: formValues.unidadMedida,
      p_codigoProducto: formValues.codigoProducto,
      p_idProveedor: Number(formValues.id_proveedor.id),
      p_idCategoria: Number(formValues.id_categoria.id),
      p_state: 1,
    };
  }
}
