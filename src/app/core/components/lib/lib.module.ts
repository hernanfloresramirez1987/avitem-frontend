import { NgModule } from '@angular/core';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { FilterMultiselectComponent } from './filter-multiselect/filter-multiselect.component';
import { FilterInputComponent } from './filter-input/filter-input.component';
import { CalendarModule } from 'primeng/calendar';
import { FilterClearComponentComponent } from './filter-clear-component/filter-clear-component.component';
import { TranslateLanModule } from '../../_modules/translate-lan.module';


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
