import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FiltersShip } from './filters.interface';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';
import { TranslateService } from '@ngx-translate/core';
import { TranslateLanService } from '../../../../layout/services/translate-lan.service';


@Component({
  selector: 'shipedge-filter-clear',
  standalone: true,
  imports: [ChipModule, FormsModule],
  templateUrl: './filter-clear-component.component.html',
  styleUrl: './filter-clear-component.component.scss',

})

export class FilterClearComponentComponent implements OnInit {


  @Input() enformato?: FiltersShip[];
  @Output() removeEvent = new EventEmitter<string>();
  constructor(private translateLanService: TranslateLanService,
    private translate: TranslateService) {
  }
  remove($event: MouseEvent, key: string) {
    this.removeEvent.emit(key);
  }
  traducir(valor: string): string {
    const text = this.translate.instant(valor);
    return text;
  }
  cambiar(): void {
    if (this.enformato) {
      for (let item of this.enformato) {
        item.show = this.traducir("labels." + item.key);
      }
    }
  }
  ngOnInit(): void {
    this.translateLanService.changeLanguage$.subscribe((lan) => {
      this.translate.use(lan);
    });
    //al inicio
    this.translate.onDefaultLangChange.subscribe(() => {
      setTimeout(() => this.cambiar());
    });
    //cada cambio
    this.translate.onLangChange.subscribe((lan) => {
      setTimeout(() => this.cambiar());
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cambiar();
  }
}
