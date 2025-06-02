import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-warehouse',
  imports: [CardModule, TranslateModule, UpperCasePipe],
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.scss'
})
export default class WarehouseComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
}
