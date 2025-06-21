import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChildren, Input, QueryList, TemplateRef, ViewChild, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeTemplate } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { Nullable } from 'primeng/ts-helpers';
import { filterConfigMatchModes } from '../../../../core/config/filtercolumn.config';

@Component({
  standalone: true,
  imports: [TableModule, MultiSelectModule, FormsModule, ButtonModule, NgTemplateOutlet],
  selector: 'appcommon-filter-multiselect',
  templateUrl: './filter-multiselect.component.html',
  styleUrls: ['./filter-multiselect.component.scss']
})
export class FilterMultiselectComponent {
  @ViewChild('multiselect') filterComponent!: any;
  @ContentChildren(PrimeTemplate) templates: Nullable<QueryList<PrimeTemplate>>;
  withTemplate = input<boolean>(false);
  
  valores = input.required<any[]>();
  type = input<string>("");
  field = input<string>();
  columna = input<string>("");
  withimage = input<string>("");
  configfilter = filterConfigMatchModes.matchmodesOnlyIn;
  listTemplate!: TemplateRef<any> | null;
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
  clearFilter(filter: any) {
    if (this.filterComponent) {
      this.filterComponent.value = [];
      this.filterComponent.updateModel();
    }
    filter(null)
  }
  
}
