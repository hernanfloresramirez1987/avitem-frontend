import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProveedoresService } from '../../../../../_services/proveedors.service';
import { UsersService } from '../../../../../_services/common/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';
import { debounceTime } from 'rxjs';
import { ProveedorRegister } from '../../../../../_models/dto/users/proveedors/proveedorRegister.interface';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TranslateLanModule } from '../../../../../_modules/translate-lan.module';
import { UpperCasePipe } from '@angular/common';
import { TranslateLanService } from '@/layout/service/translate-lan.service';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-supplier-create',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, DatePickerModule, FormsModule, InputTextModule, RadioButtonModule, SelectModule, ButtonModule, CalendarModule, CheckboxModule, InputGroupModule, InputGroupAddonModule, TranslateLanModule, UpperCasePipe],
  templateUrl: './supplier-create.component.html',
  styleUrl: './supplier-create.component.scss'
})
export default class SupplierCreateComponent {
  registroForm: FormGroup;
  expedidoOptions!: { name: string; code: string }[];
  sexo!: { name: string, key: string }[];
  checkComplementCI: boolean = true;

  proveedorRegister!: ProveedorRegister;

  constructor(private proveedorServ: ProveedoresService, private usersServ: UsersService, private translate : TranslateService, private translateLanService : TranslateLanService, private fb: FormBuilder, private router: Router){
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    this.usersServ.getExpedidoOptions().subscribe(t => this.expedidoOptions = t);
    this.usersServ.getSexo().subscribe(t => this.sexo = t);
    // this.usersServ.getTipo().subscribe(t => this.tipo = t);
    // this.usersServ.getRol().subscribe(t => this.rol = t);
    
    this.registroForm = this.fb.group({ // Datos de persona
      ci: ['', [Validators.required, Validators.pattern(/^[0-9]{6,10}$/)]],
      ciExpedit: ['', [Validators.required]],
      ciComplement: [''],
      nombre: ['', Validators.required],
      app: ['', Validators.required],
      apm: ['', ],
      sexo: ['', Validators.required],
      fnaci: [null, Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', []],
      email: ['', [Validators.required, Validators.email]],
      // Datos de proveedor
      empresa: ['', Validators.required],
      nit: [''], // Validators.required, Validators.pattern(/^[0-9]{6,10}$/)],
      telefonoEmpresa: ['', Validators.required],
      direccionEmpresa: ['', Validators.required]
      });
  }

  ngOnInit(): void {
    this.registroForm.valueChanges.pipe(debounceTime(5000)).subscribe(t => {
      console.log('Formulario : \n', t);
      console.log('Errores:', t.errors);
      for (const control in this.registroForm.controls) {
        console.log(`${control}:`, this.registroForm.get(control)?.errors);
      }
    });
  }

  save = () =>this.saveProveedor();

  saveProveedor() {
    console.log(this.asignarValores());
    this.proveedorServ.postSaveProveedor(this.asignarValores()).
      subscribe(t => {
        if(t.CodigoEstado === "201") {
          this.router.navigate(['users/proveedores']);
        }
      });
  }

  asignarValores(): ProveedorRegister {
    const formValues = this.registroForm.value;

    const dateFNaci = new Date(formValues.fnaci);
    const formattedDateFNaci = dateFNaci.toISOString().split("T")[0];

    return this.proveedorRegister = {
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
      
      // Datos de proveedor - Added missing properties
      pr_empresa: formValues.empresa,
      pr_nit: formValues.nit,
      pr_telefonoEmpresa: formValues.telefonoEmpresa,
      pr_direccionEmpresa: formValues.direccionEmpresa
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
      this.router.navigate(['users/proveedores']);
    }
  }
}
