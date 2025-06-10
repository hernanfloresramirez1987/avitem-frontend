import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { PrimeTemplate } from 'primeng/api';
import { MultiSelect, MultiSelectModule } from 'primeng/multiselect';
import { Nullable } from 'primeng/ts-helpers';
import { filterConfigMatchModes } from '../../../config/filtercolumn.config';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  imports: [TableModule, MultiSelectModule, FormsModule, ButtonModule],
  selector: 'appcommon-filter-multiselect',
  templateUrl: './filter-multiselect.component.html',
  styleUrls: ['./filter-multiselect.component.scss']
})
export class FilterMultiselectComponent {

  @Input() valores!: any[];
  @Input() type!: string;
  @Input() field!: string;
  @Input() columna!: string;
  @ViewChild('multiselect') filterComponent!: MultiSelect;
  configfilter = filterConfigMatchModes.matchmodesOnlyIn;
  @ContentChildren(PrimeTemplate) templates: Nullable<QueryList<PrimeTemplate>>;
  listTemplate!: TemplateRef<any> | null;
  @Input() withTemplate: boolean = false;
  hide() {
    this.filterComponent.hide();
  }

  ngAfterContentInit() {
    (this.templates as QueryList<PrimeTemplate>).forEach((item) => {
      switch (item.getType()) {
        case 'listItem':
          this.listTemplate = item.template;
          break;
      }
    });
  }
}
