import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { TranslateLanService } from './services/translate-lan.service';
import { LayoutService } from './services/app.layout.service';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit{

    _translate = inject(TranslateLanService)
    http = inject(HttpClient);
    // authService = inject(AuthService);

    menu: MenuItem[] = [];

    @ViewChild('searchinput') searchInput!: ElementRef;

    @ViewChild('menubutton') menuButton!: ElementRef;

    searchActive = false;

    items: MenuItem[];
    lan: string
    username?: string;
    role?: string;

    constructor(public layoutService: LayoutService) {
        this.lan = TranslateLanService.lan

        this.items = [
            {
                label: 'EN',
                // icon: 'pi pi-refresh',
                command: () => {
                   this.en()
                }
            },
            {
                label: 'ES',
                // icon: 'pi pi-refresh',
                command: () => {
                   this.es()
                }
            }
        ];
    }

    async ngOnInit() {
        // let user = await this.authService.getAuthInfo()
        // this.username = user?.user_name
        // this.role = user?.role
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    activateSearch() {
        this.searchActive = true;
        setTimeout(() => {
            this.searchInput.nativeElement.focus();
        }, 100);
    }

    deactivateSearch() {
        this.searchActive = false;
    }

    removeTab(event: MouseEvent, item: MenuItem, index: number) {
        this.layoutService.onTabClose(item, index);
        event.preventDefault();
    }
    get layoutTheme(): string {
      return this.layoutService.config().layoutTheme;
    }

    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }

    get logo(): string {
      const path = 'assets/layout/images/logo-';
      const logo = (this.layoutTheme === 'primaryColor'  && !(this.layoutService.config().theme  == "yellow")) ? 'light.png' : (this.colorScheme === 'light' ? 'dark.png' : 'light.png');
      return path + logo;
    }

    get tabs(): MenuItem[] {
        return this.layoutService.tabs;
    }

    es(){
        this.lan = TranslateLanService.lan = 'es'
        this._translate.changeLanguage$.next(TranslateLanService.lan)
    }
    en(){
        this.lan = TranslateLanService.lan = 'en'
        this._translate.changeLanguage$.next(TranslateLanService.lan)
    }

    loading = false
    async logout(){
        console.log('async logout(){: ');
        // let user = await this.authService.getAuthInfo()
        // this.loading = true
        // if (!user?.id) {
        //     this.authService.redirectTologin()
        //     return
        // }
        // this.authService.logout(user?.id).subscribe({
        //     error: () => {
        //         this.loading = false
        //     }
        // })
    }
}
