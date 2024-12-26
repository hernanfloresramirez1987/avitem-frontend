import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLanService } from "../../layout/services/translate-lan.service";


@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: TranslateLanService.lan,
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        },
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
     TranslateModule
   ]
})
export class TranslateLanModule{}