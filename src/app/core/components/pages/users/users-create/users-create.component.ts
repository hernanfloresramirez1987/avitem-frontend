import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateLanModule } from '../../../../_modules/translate-lan.module';
import { TranslateService } from '@ngx-translate/core';
import { TranslateLanService } from '../../../../../layout/services/translate-lan.service';
import { JsonPipe, UpperCasePipe } from '@angular/common';



@Component({
  selector: 'app-users-create',
  standalone: true,
  imports: [CardModule, FormsModule, InputTextModule, ButtonModule, TranslateLanModule, UpperCasePipe],
  templateUrl: './users-create.component.html',
  styleUrl: './users-create.component.scss'
})
export default class UsersCreateComponent {
  
  constructor(private translate : TranslateService, private translateLanService : TranslateLanService){
    this.translateLanService.changeLanguage$.subscribe((lan: string) => this.translate.use(lan));
    console.log('Esto no traduce');
  }

}
