import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TranslateLanModule } from '../../../../_modules/translate-lan.module';
import { TranslateService } from '@ngx-translate/core';
import { TranslateLanService } from '../../../../../layout/services/translate-lan.service';
import { JsonPipe, UpperCasePipe } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CheckboxModule } from 'primeng/checkbox';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-users-create',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, InputTextModule, RadioButtonModule, DropdownModule, ButtonModule, CalendarModule, CheckboxModule, InputGroupModule, InputGroupAddonModule, TranslateLanModule, UpperCasePipe],
  templateUrl: './users-create.component.html',
  styleUrl: './users-create.component.scss'
})
export default class UsersCreateComponent implements OnInit {
  registroForm: FormGroup;
  expedidoOptions: { name: string; code: string }[];
  sexo: { name: string, key: string }[];
  cargo: { name: string; code: number }[];
  tipo: { name: string; code: number }[];
  rol: { name: string; code: string }[];
  checkComplementCI: boolean = true;

  constructor(private translate : TranslateService, private translateLanService : TranslateLanService, private fb: FormBuilder){
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    
    this.expedidoOptions = [
      { name: 'La Paz', code: 'LP' },
      { name: 'Santa Cruz', code: 'SC' },
      { name: 'Cochabamba', code: 'CB' },
      { name: 'Oruro', code: 'OR' },
      { name: 'Potosí', code: 'PO' },
      { name: 'Chuquisaca', code: 'CH' },
      { name: 'Tarija', code: 'TA' },
      { name: 'Beni', code: 'BE' },
      { name: 'Pando', code: 'PA' },
    ];
    this.cargo = [
      { name: 'Gerente', code: 1 },
      { name: 'Administrador', code: 2 },
      { name: 'Vendedor', code: 3 },
      { name: 'Contador', code: 4 },
    ];
    this.sexo = [
      { name: 'Varon', key: 'V' },
      { name: 'Mujer', key: 'M' }
    ];
    this.tipo = [
      { name: 'Interno', code: 1 },
      { name: 'Externo', code: 2 },
      { name: 'Temporal', code: 3 },
      { name: 'Permanente', code: 4 },
    ];
    this.rol = [
      { name: 'Administrador', code: 'admin' },
      { name: 'Usuario', code: 'user' },
      { name: 'Invitado', code: 'guest' }
    ];
    
    this.registroForm = this.fb.group({ // Datos de persona
      ci: ['', [Validators.required, Validators.pattern(/^[0-9]{6,10}$/)]],
      ciExpedit: ['', [Validators.required]],
      ciComplement: [''],
      nombre: ['', Validators.required],
      app: ['', Validators.required],
      apm: ['', ],
      sexo: ['', Validators.required],
      fNaci: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', []],
      email: ['', [Validators.required, Validators.email]],
      // Datos de empleado
      idTipo: [, [Validators.required]],
      idCargo: [, [Validators.required]],
      fechaIngreso: [new Date(), Validators.required],
      salario: [''],
      // Datos de usuario
      username: ['', [Validators.required, Validators.minLength(3)]],
      rol: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      // reppit_password: ['', [Validators.required]],
      reppit_password: ['', Validators.required],
      }, { validators: this.passwordMatchValidator,
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const reppitPassword = group.get('reppit_password')?.value;
    return password === reppitPassword ? null : { passwordsMismatch: true };
  }

  ngOnInit(): void {
    this.registroForm.valueChanges.pipe(debounceTime(5000)).subscribe(t => {
      // console.log('Formulario : \n', t);
      console.log('Errores:', t.errors);
      for (const control in this.registroForm.controls) {
        console.log(`${control}:`, this.registroForm.get(control)?.errors);
      }
    });
  }


  saveEmployee() {

  }
}
