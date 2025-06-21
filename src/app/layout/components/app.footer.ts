import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    standalone: true,
    imports: [TranslatePipe],
    selector: '[app-footer]',
    template: ` <div class="footer-start">
            <img src="layout/images/logo-dark.png" alt="logo" />
            <span class="app-name">Avitem Importaciones</span>
        </div>
        <div class="footer-right">
            <span>© {{ 'labels.developed_by' | translate }} {{ 'labels.ing' | translate }} Hernán Flores Ramírez</span>
        </div>`,
    host: {
        class: 'layout-footer'
    }
})
export class AppFooter {}
