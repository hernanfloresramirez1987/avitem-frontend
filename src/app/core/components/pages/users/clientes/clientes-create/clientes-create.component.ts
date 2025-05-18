import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TranslateLanModule } from '../../../../../_modules/translate-lan.module';
import { Router, RouterLink } from '@angular/router';
import { ClientRegister } from '../../../../../_models/dto/users/clients/clientRegister.interface';
import { UsersService } from '../../../../../_services/common/user.service';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime } from 'rxjs';
import { ClientsService } from '../../../../../_services/clients.service';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { UpperCasePipe } from '@angular/common';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-clientes-create',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, SelectModule, DatePickerModule, InputTextModule, RadioButtonModule, DropdownModule, ButtonModule, CalendarModule, CheckboxModule, InputGroupModule, InputGroupAddonModule, TranslateLanModule, UpperCasePipe, RouterLink],
  templateUrl: './clientes-create.component.html',
  styleUrl: './clientes-create.component.scss'
})
export default class ClientesCreateComponent implements OnInit {
  registroForm: FormGroup;
  expedidoOptions!: { name: string; code: string }[];
  sexo!: { name: string, key: string }[];

  checkComplementCI: boolean = true;

  clienteRegister!: ClientRegister;


  constructor(private clientServ: ClientsService, private usersServ: UsersService, private translate : TranslateService, private translateLanService : TranslateLanService, private fb: FormBuilder, private router: Router){
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    this.usersServ.getExpedidoOptions().subscribe(t => this.expedidoOptions = t);
    this.usersServ.getSexo().subscribe(t => this.sexo = t);
    
    this.registroForm = this.fb.group({ // Datos de persona
      ci: ['', [Validators.required, Validators.pattern(/^[0-9]{6,10}$/)]],
      ciExpedit: ['', [Validators.required]],
      ciComplement: [''],
      nombre: ['', Validators.required],
      app: ['', Validators.required],
      apm: ['', ],
      sexo: ['', Validators.required],
      fnaci: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', []],
      email: ['', [Validators.required, Validators.email]],
      // Datos del cliente
      nit: [''],
    });
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

  // saveCliente() {
  //   console.log(this.asignarValores());
  //   this.clientServ.postSaveCliente(this.asignarValores()).
  //     subscribe(t => {
  //       if(t.CodigoEstado === "201") {
  //         this.router.navigate(['users/proveedores']);
  //       }
  //     });
  // }

  asignarValores(): ClientRegister {
    const formValues = this.registroForm.value;

    const dateFNaci = new Date(formValues.fnaci);
    const formattedDateFNaci = dateFNaci.toISOString().split("T")[0];
    
    return this.clienteRegister = {
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
      
      // Datos del cliente - Added missing properties
      cli_nit: formValues.nit,
    };
  }

  cleanAll() {
    this.registroForm.reset();
  }

  cancel() {
    this.router.navigate(['users/clientes']);
  }

  save() {
    this.saveCliente();
  } 

  saveCliente() {
    console.log(this.asignarValores());
    this.clientServ.postSaveCliente(this.asignarValores()).
      subscribe(t => {
        if(t.CodigoEstado === "201") {
          this.router.navigate(['users/clientes']);
        }
      });
  }
}