import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TranslateLanModule } from 'src/app/core/_modules/translate-lan.module';
import { TagModule } from 'primeng/tag';
import { FilterMultiselectComponent } from './filter-multiselect/filter-multiselect.component';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { CalendarModule } from 'primeng/calendar';
import { FilterClearComponentComponent } from './filter-clear-component/filter-clear-component.component';


@NgModule({
  declarations: [
    FilterMultiselectComponent,
    FilterInputComponent
  ],
  exports:[
    FilterMultiselectComponent,
    FilterInputComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MultiSelectModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    FormsModule,
    TranslateLanModule,
    TagModule,
    TieredMenuModule,
    CalendarModule
  ]
})
export class LibModule { }
