import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateLanService } from '../../../../../../layout/services/translate-lan.service';
import { Router } from '@angular/router';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { TranslateLanModule } from '../../../../../_modules/translate-lan.module';
import { CategoriasService } from '../../../../../_services/categorias.service';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, InputTextModule, DropdownModule, ButtonModule, CalendarModule, CheckboxModule, TranslateLanModule, UpperCasePipe],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export default class ProductCreateComponent {
  registroForm: FormGroup;
  categorias!: { nombre: string; id: number }[];

  constructor(private categoriasServ: CategoriasService, private translate : TranslateService, private translateLanService : TranslateLanService, private fb: FormBuilder, private router: Router){
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    // const currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');

    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: [''],
      // cantidadStock: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      unidadMedida: ['', Validators.required],
      codigoProducto: ['', Validators.required],
      id_categoria: ['', Validators.required]
    })

    this.categoriasServ.getAll().subscribe(t => {
      console.log('console.log(t): \n', t)
    });
  }

  saveProcto() {
  }
}
