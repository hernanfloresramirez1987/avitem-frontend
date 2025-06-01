import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';
import { DatePipe, UpperCasePipe } from '@angular/common';
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
import { ColoresService } from '../../../../../_services/colores.service';
import { TagModule } from 'primeng/tag';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, InputTextModule, DropdownModule, ButtonModule, DatePickerModule, CheckboxModule, TranslateLanModule, UpperCasePipe, TagModule, FormsModule, RouterLink],
  providers: [DatePipe],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export default class ProductCreateComponent {
  registroForm: FormGroup;
  categorias!: { id: number, nombre: string, descripcion: string }[];
  colores!: { id: number, code: string, color: string }[];
  unidades!: string[];
  proveedores!: ProveedorItem[];
  proveedorDto!: ProveedorDTO;

  productoRegister!: ProductoRegister;
  currentDate!: string;

  constructor(private categoriasServ: CategoriasService, private coloresServi: ColoresService, private proveedoresServ: ProveedoresService, private productosServ: ProductosService, private translate : TranslateService, private translateLanService : TranslateLanService, private fb: FormBuilder, private router: Router, private datePipe: DatePipe) {
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    this.currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy') || '';
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: [''],
      fechaIngreso: [this.currentDate, Validators.required],
      unidadMedida: ['', Validators.required],
      codigoProducto: ['', Validators.required],
      id_color: ['', Validators.required],
      id_proveedor: ['', Validators.required],
      id_categoria: ['', Validators.required]
    });
    this.productosServ.getUnidsMedida().subscribe(t => this.unidades = t);

    this.proveedoresServ.postProveedoresSearch(this.proveedorDto).subscribe({
      next: (t) => this.proveedores = t,
      error: (err) => console.error('Error al obtener proveedores:', err) });

    this.categoriasServ.getAllCategolias().subscribe({
      next: (t) => this.categorias = t,
      error: (err) => console.error('Error al obtener categorias:', err) });

    this.coloresServi.getAllColores().subscribe({
      next: (t) => {this.colores = t; console.log(this.colores)},
      error: (err) => console.error('Error al obtener proveedores:', err) });
      // console.log(this.colores);
  }

  getColorBackground(code: string): string {
    switch (code) {
      case 'Nat':
        return 'gray'; // Beige (Natural)
      case 'Cha':
        return '#FBE7C6'; // Color Champán
      case 'Neg':
        return '#000000'; // Negro
      case 'Mad':
        return '#8B4513'; // Color Madera (Marrón)
      default:
        return '#FFFFFF'; // Color blanco predeterminado
    }
  }

  saveProcto() {
    //productosServ
    console.log(this.asignarValores());
    this.productosServ.postSaveProduct(this.asignarValores()).
      subscribe(t => {
        if(t.CodigoEstado === "201") {
          this.router.navigate(['inventory/products']);
        }
      });
  }

  asignarValores(): ProductoRegister {
    const formValues = this.registroForm.value;

    const dateIngreso = new Date(formValues.fechaIngreso);
    const formattedDateIngreso = dateIngreso.toISOString().split("T")[0];

    return this.productoRegister = {
      p_nombre: formValues.nombre,
      p_descripcion: formValues.descripcion,
      p_cantidadStock: 0,
      p_fechaIngreso: formattedDateIngreso,
      p_unidadMedida: formValues.unidadMedida.medida,
      p_codigoProducto: formValues.codigoProducto,
      p_idProveedor: Number(formValues.id_proveedor.id),
      p_idCategoria: Number(formValues.id_color.id),
      p_idColor: Number(formValues.id_categoria.id),
      p_state: 1,
    };
  }

  cleanAll() {
    this.registroForm.patchValue({ total: '',
        nombre: '',
        descripcion: '',
        fechaIngreso: new Date(),
        unidadMedida: '',
        codigoProducto: '',
        id_color: '',
        id_proveedor: '',
        id_categoria: '',
      }, 
      { emitEvent: false });
  }
}
