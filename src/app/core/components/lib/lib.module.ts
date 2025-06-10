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
import { TranslateLanModule } from '../../_modules/translate-lan.module';


@NgModule({
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
    FilterMultiselectComponent,
    FilterInputComponent
  ],
  exports: [
    FilterMultiselectComponent,
    FilterInputComponent
  ]
})
export class LibModule { }
