import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { TranslateLanService } from './translate-lan.service';
import { APP_MENU } from '../_utils/app.menu';

@Injectable({
  providedIn: 'root'
})
export class MenuSidebarService {

  _translate = inject(TranslateService)

  constructor(private http: HttpClient) { }

  get getMenuSidebar() {
    let menus =  JSON.parse(JSON.stringify(APP_MENU));
    this.processMenuTranslation(menus);
    return menus
  }
  processMenuTranslation( children:MenuItem[]){
    for (let item of children){
        if(item.separator)
          continue;
      item.label = this._translate.instant("pages."+item.label);
      if(item.items){
        this.processMenuTranslation(item.items);
      }
    }
  }
}
