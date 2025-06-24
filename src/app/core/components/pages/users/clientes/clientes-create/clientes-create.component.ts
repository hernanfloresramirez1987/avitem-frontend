import { Component, inject, OnInit } from '@angular/core';
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
import { PersonasService } from '@/core/_services/personas.service';
import { PersonaItem } from '@/core/_models/users/persona.interface';
import { ToastService } from '@/core/_services/common/toast.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-clientes-create',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, SelectModule, DatePickerModule, InputTextModule, RadioButtonModule, DropdownModule, ButtonModule, CalendarModule, CheckboxModule, InputGroupModule, InputGroupAddonModule, TranslateLanModule, UpperCasePipe, ToastModule],
  templateUrl: './clientes-create.component.html',
  styleUrl: './clientes-create.component.scss'
})
export default class ClientesCreateComponent implements OnInit {
  fb = inject(FormBuilder)
  registroForm: FormGroup = this.fb.group({ // Datos de persona
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
  expedidoOptions!: { name: string; code: string }[];
  sexo!: { name: string, key: string }[];

  checkComplementCI: boolean = true;

  clienteRegister!: ClientRegister;

  constructor(private readonly personaServ: PersonasService, private readonly clientServ: ClientsService, private readonly usersServ: UsersService, private readonly translate : TranslateService, private readonly translateLanService : TranslateLanService, private readonly router: Router, private readonly toastServ: ToastService){
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    this.usersServ.getExpedidoOptions().subscribe(t => this.expedidoOptions = t);
    this.usersServ.getSexo().subscribe(t => this.sexo = t);
    
  }

  ngOnInit(): void {
    this.registroForm.valueChanges.pipe(debounceTime(5000)).subscribe(t => {
      // console.log('Formulario : \n', t);
      console.log('CI:', t.ci);
      for (const control in this.registroForm.controls) {
        // console.log(`${control}:`, this.registroForm.get(control)?.errors);
      }
      if (t.ci !== '' && typeof t.ci === 'number') {
        this.searchCI(t.ci);
      }
    });
  }

  save = () =>this.saveCliente();

  saveCliente() {
    console.log(this.asignarValores());
    this.clientServ.postSaveCliente(this.asignarValores()).
      subscribe(t => { console.log(t);
        if(t.CodigoEstado === "201") {
          this.router.navigate(['users/clientes']);
        }
      });
  }

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
    const confirClean = confirm('¿Estás seguro de querer limpiar el formulario?');
    if(confirClean) {
      this.registroForm.reset();
    }
  }

  cancel() {
    const confir = confirm('¿Estás seguro de querer cancelar el registro y salir del formulario?');
    if(confir) {
      this.router.navigate(['users/clientes']);
    }
  }

  searchCI = (ci: number) => this.personaServ.getPersonaCI(ci)
    .subscribe((t: any) => {
      if(t.success === true && t.data !== null) {
        console.log('console.log(t);:    ', t);
        this.requestData(t.data);
        this.toastServ.showInfo(`Usuario con C.I.: ${t.data.ci} Encontrado`,`Nombre: ${t.data.nombre} ${t.data.app} ${t.data.app}\nC.I.: ${t.data.ci} ${t.data.ciExpedit}\nSexo: ${(t.data.sexo ==='V')?'Varon':'Mujer'}\nTelefono: ${t.data.telefono}\nDireccion: ${t.data.direccion}\nEmail: ${t.data.email}`)
      }
    })

  requestData = (data: PersonaItem) => {
    console.log(data)
    console.log(data.nombre)
    
    const dateFNaci = new Date(data.fnaci);
    const formattedDateFNaci = dateFNaci.toISOString().split("T")[0];
    this.registroForm.patchValue({ // ci: data.ci,
      ciExpedit: data.ciExpedit,
      ciComplement: data.ciComplement,
      nombre: data.nombre,
      app: data.app,
      apm: data.apm,
      sexo: data.sexo,
      fnaci: formattedDateFNaci,
      direccion: data.direccion,
      telefono: data.telefono,
      email: data.email,
      nit: ''
    });
  
    console.log('Formulario actualizado:', this.registroForm.value);

    this.searchCIinClient(data.ci);
  }
  
  searchCIinClient = (ci: number) => this.clientServ.getClienteCI(ci)
    .subscribe((t: any) => {
      if(t.success === true && t.data !== null) {
        this.registroForm.patchValue({
          nit: t.data.nit
        });
      }
    })
}