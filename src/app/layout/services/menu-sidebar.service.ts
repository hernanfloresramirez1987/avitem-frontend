import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { APP_MENU } from '../_utils/app.menu';

@Injectable({
  providedIn: 'root'
})
export class MenuSidebarService {

  _translate = inject(TranslateService)
  app_menu = signal(APP_MENU);
  items_app_menu = signal<any[]>([]);
  items_app_menuVisual = signal<any[]>([]);
  items_app_menuConfigs = signal<any[]>([]);

  constructor(private http: HttpClient) {
    this.initializeMenuFromLocalStorage();
  }

  initializeMenuFromLocalStorage() {
    const storedAppMenu = localStorage.getItem('app_menu');
    if (storedAppMenu) {
      this.app_menu.set(JSON.parse(storedAppMenu).filter((t: any) => t.favorite !== true));
    } else {
      this.app_menu.set(APP_MENU);
    }
    const storedItemsAppMenu = localStorage.getItem('items_app_menuVisual');
    if (storedItemsAppMenu) {
      this.items_app_menu.set(JSON.parse(storedItemsAppMenu));
    }
  }

  get getMenuSidebar() {
    let menus =  JSON.parse(JSON.stringify(this.app_menu()));
    this.processMenuTranslation(menus);
    return menus
  }
  processMenuTranslation( children:MenuItem[]) {
    for (let item of children){
        if(item.separator)
          continue;
      item.label = this._translate.instant("pages."+item.label);
      if(item.items){
        this.processMenuTranslation(item.items);
      }
    }
    // for (let i = 0; i < children.length; i++) {
    //   let item = children[i];
    //   if (item.separator) {
    //     continue;
    //   }
    //   item.label = this._translate.instant("pages." + item.label);
    //   if (item.items) {
    //     this.processMenuTranslation(item.items);
    //   }
    // }
  }
  addSubmenuToLastMenu(submenu: any, isFavorite: boolean) {
    const appMenu = this.app_menu();
    if (!appMenu || appMenu.length === 0) { // Manejar el caso en el que appMenu sea undefined o esté vacío
      return;
    }

    const lastMenu = appMenu[appMenu.length - 1];
    if (!lastMenu || !lastMenu.items) {
      return;
    }
    const itemsAppMenu = this.items_app_menu();
    const itemsAppMenuVisual = this.items_app_menuVisual();
    const itemAppMenuConfigs = this.items_app_menuConfigs();
    if (isFavorite)
      lastMenu.items.push(submenu);
    localStorage.setItem('app_menu', JSON.stringify(this.app_menu()));
    localStorage.setItem('items_app_menu', JSON.stringify(itemsAppMenu));
    localStorage.setItem('items_app_menuVisual', JSON.stringify(itemsAppMenuVisual));
    localStorage.setItem('items_app_menuConfigs', JSON.stringify(itemAppMenuConfigs))

    return this.app_menu();
  }

  // removeItemFromMenu(itemName: string): void {
  //   console.log(itemName);
  //   const currentItems = this.items_app_menu();
  //   const currentItemsMenu = this.app_menu();
  //   const updatedItems = currentItems.filter(item => item.name !== itemName);
  //   const updatedItemsMenu = currentItemsMenu.filter(item => item.label !== itemName);
  //   this.removeFromLocalStorageItems(updatedItems);
  //   this.removeFromLocalStorage(updatedItemsMenu);
  //   this.items_app_menu.set(updatedItemsMenu);
  //   this.app_menu.set(updatedItemsMenu);
  // }

  // removeFromLocalStorage(key: any): void {
  //   localStorage.setItem('app_menu', JSON.stringify(key));
  // }
  // removeFromLocalStorageItems(key: any): void {
  //   localStorage.setItem('items_app_menu', JSON.stringify(key));
  // }
}

// import { HttpClient } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import { MenuItem } from 'primeng/api';
// import { Observable, map } from 'rxjs';
// import { TranslateLanService } from './translate-lan.service';
// import { APP_MENU } from '../_utils/app.menu';

// @Injectable({
//   providedIn: 'root'
// })
// export class MenuSidebarService {

//   _translate = inject(TranslateService)

//   constructor(private http: HttpClient) { }

//   get getMenuSidebar() {
//     let menus =  JSON.parse(JSON.stringify(APP_MENU));
//     this.processMenuTranslation(menus);
//     return menus
//   }
//   processMenuTranslation( children:MenuItem[]){
//     for (let item of children){
//         if(item.separator)
//           continue;
//       item.label = this._translate.instant("pages."+item.label);
//       if(item.items){
//         this.processMenuTranslation(item.items);
//       }
//     }
//   }
// }
