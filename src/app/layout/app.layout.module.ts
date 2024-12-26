import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './app.topbar.component';
import { AppSidebarComponent } from './app.sidebar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppConfigModule } from './config/config.module';
import { AppLayoutComponent } from './app.layout.component';
import { AppBreadcrumbComponent } from './app.breadcrumb.component';
import { StyleClassModule } from 'primeng/styleclass';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { TranslateLanModule } from '../core/_modules/translate-lan.module';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppSidebarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppLayoutComponent,
        AppBreadcrumbComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        InputTextModule,
        InputSwitchModule,
        MenuModule,
        RouterModule,
        DropdownModule,
        SidebarModule,
        StyleClassModule,
        BadgeModule,
        RadioButtonModule,
        ButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        TooltipModule,
        AppConfigModule,
        TranslateLanModule
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
