import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLayoutModule } from './layout/app.layout.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ATemplateMakerService } from './core/_services/a-templatemaker.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppLayoutModule, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'avitem-frontend';

  constructor(private translate: TranslateService, private aTemplateMakerService: ATemplateMakerService) {
    this.translate.setDefaultLang('en'); // Configura un idioma por defecto
  }


  btn = () => this.aTemplateMakerService.redirectToBackend();
}