import { AfterContentInit, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LayoutService } from './services/app.layout.service';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { MenuSidebarService } from './services/menu-sidebar.service';
import { TranslateLanService } from './services/translate-lan.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppMenuComponent implements AfterContentInit {

    _translate  = inject(TranslateService)
    _translateLanService  = inject(TranslateLanService)
    layoutService = inject(LayoutService)
    menuJson = inject(MenuSidebarService)
    model = signal<MenuItem[]>([])

    ngAfterContentInit(){
        this._translateLanService.changeLanguage$.subscribe((lan: any) => {
            this._translate.use(lan)
            this.getMenu()
        })
        this.getMenu()
    }
    getMenu(){
        timer(400).subscribe(() => {
            this.model.set([])
            this.model.set(this.menuJson.getMenuSidebar);
        })
    }
}
