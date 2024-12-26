import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json'); // Ruta de traducciones
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      CommonModule, 
      BrowserAnimationsModule, 
      TranslateModule.forRoot({
        loader: {
          deps: [HttpClient],
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
        },
        defaultLanguage: 'es',
      })
    ),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideAnimationsAsync()
  ]
};
