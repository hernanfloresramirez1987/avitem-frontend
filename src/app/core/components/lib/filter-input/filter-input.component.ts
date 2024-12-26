import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { filterConfigMatchModes } from '../../../config/filtercolumn.config';
import { TranslateLanService } from '../../../../layout/services/translate-lan.service';

@Component({
  selector: 'shipedge-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit {

  @Input() field!: string;
  @Input() type!: string;
  typereal: string = "numeric";
  configfilter = filterConfigMatchModes.matchmodes;
  constructor(private translateLanService: TranslateLanService,
    private translate: TranslateService) {
  }
  ngOnInit(): void {
    if (this.type == "numeric") {
      this.configfilter = filterConfigMatchModes.matchmodes;
      this.typereal = "numeric";
    } else if (this.type == "text") {
      this.configfilter = filterConfigMatchModes.matchmodesOnlyContains;
      this.typereal = "text";
    } else if (this.type == "date") {
      this.configfilter = filterConfigMatchModes.matchmodesOnlyIn
      this.typereal = "date";
    }
    /*console.log("type",this.type);
    console.log("config",this.configfilter);
    console.log("real",this.typereal);*/
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
  cambiar() {
    this.configfilter.forEach(elemento => {
      elemento.label = this.traducir(elemento.original);
    });
  }
  traducir(valor: string): string {
    const text = this.translate.instant(valor);
    return text;
  }
  formatDate(date: Date): string {
    const year = date.getFullYear().toString().slice(-4);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    let resul = `${year}-${month}-${day}`;
    console.log(resul);
    return resul;
  }
}
