import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TranslateLanModule } from '../../../../../_modules/translate-lan.module';
import { TranslateService } from '@ngx-translate/core';
import { SelectModule } from 'primeng/select';
import { UpperCasePipe } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CheckboxModule } from 'primeng/checkbox';
import { debounceTime } from 'rxjs';
import { EmployeeRegister } from '../../../../../_models/dto/users/employees/employeeRegister.interface';
import { EmployeesService } from '../../../../../_services/employees.service';
import { Router } from '@angular/router';
import { UsersService } from '../../../../../_services/common/user.service';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { DatePickerModule } from 'primeng/datepicker';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-users-create',
  standalone: true,
  imports: [CardModule, DatePickerModule, ReactiveFormsModule, InputTextModule, RadioButtonModule, SelectModule, ButtonModule, CheckboxModule, InputGroupModule, InputGroupAddonModule, TranslateLanModule, UpperCasePipe, PasswordModule],
  templateUrl: './users-create.component.html',
  styleUrl: './users-create.component.scss'
})
export default class UsersCreateComponent implements OnInit {
  registroForm: FormGroup;
  expedidoOptions!: { name: string; code: string }[];
  sexo!: { name: string, key: string }[];
  cargo!: { name: string; code: number }[];
  tipo!: { name: string; code: number }[];
  rol!: { name: string; code: string }[];
  checkComplementCI: boolean = true;

  employeRegister!: EmployeeRegister;

  constructor(private employeeServ: EmployeesService, private usersServ: UsersService, private translate : TranslateService, private translateLanService : TranslateLanService, private fb: FormBuilder, private router: Router){
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    this.usersServ.getExpedidoOptions().subscribe(t => this.expedidoOptions = t);
    this.usersServ.getSexo().subscribe(t => this.sexo = t);
    this.usersServ.getTipo().subscribe(t => this.tipo = t);
    this.usersServ.getCargo().subscribe(t => this.cargo = t);
    this.usersServ.getRol().subscribe(t => this.rol = t);
    
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

  save = () =>this.saveEmployee();
  
  saveEmployee() {
    console.log(this.asignarValores());
    this.employeeServ.postSaveEmployee(this.asignarValores()).
      subscribe(t => {
        if(t.CodigoEstado === "201") {
          this.router.navigate(['users/empleados']);
        }
      });
  }


  asignarValores(): EmployeeRegister {
    const formValues = this.registroForm.value;

    const dateFNaci = new Date(formValues.fNaci);
    const formattedDateFNaci = dateFNaci.toISOString().split("T")[0];
    const dateFIng = new Date(formValues.fechaIngreso);
    const formattedDateFIng = dateFIng.toISOString().split("T")[0];

    return this.employeRegister = {
      // Datos de usuario
      u_username: formValues.username,
      u_password: formValues.password,  // Aquí puedes manejar el hashing si es necesario antes de enviarlo
      u_rol: formValues.rol.code,

      // Datos de persona
      p_ci: formValues.ci,
      p_ciExpedit: formValues.ciExpedit.code,
      p_ciComplement: formValues.ciComplement,
      p_nombre: formValues.nombre,
      p_app: formValues.app,
      p_apm: formValues.apm,
      p_sexo: formValues.sexo.key,
      p_fnaci: formattedDateFNaci,
      p_direccion: formValues.direccion,
      p_telefono: formValues.telefono,
      p_email: formValues.email,

      // Datos de empleado
      e_idtipo: formValues.idTipo.code,
      e_idcargo: formValues.idCargo.code,
      e_fing: formattedDateFIng,
      e_salario: formValues.salario,
    };
  }

  cleanAll() {
    const confirClean = confirm('¿Estás seguro de querer limpiar el formulario?');
    if(confirClean) {
      this.registroForm.reset();
    }
  }

  cancel() {
    const confir = confirm('¿Estás seguro de querer cancelar el registro y salir del formulario?');
    if(confir) {
      this.router.navigate(['users/empleados']);
    }
  }
}
