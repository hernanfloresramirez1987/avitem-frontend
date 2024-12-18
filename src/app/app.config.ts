import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeng/themes/aura';

import { HttpClient, provideHttpClient } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json')
}

export const appConfig: ApplicationConfig = {
  providers: [ //provideZoneChangeDetection({ eventCoalescing: true }),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
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
    provideHttpClient(),
    provideAnimations(),
    provideAnimationsAsync(),
    // providePrimeNG({ 
    //     theme: {
    //         preset: Aura
    //     }
    // })
  ]
};
