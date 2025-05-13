import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateLanService {
    static lan: string = 'es'; // Idioma por defecto
    changeLanguage$ = new BehaviorSubject<string>(TranslateLanService.lan);

    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang(TranslateLanService.lan);
    }

    changeLanguage(language: string): void {
        TranslateLanService.lan = language;
        this.translate.use(language); // Cambiar el idioma
        this.changeLanguage$.next(language); // Notificar el cambio
    }
}