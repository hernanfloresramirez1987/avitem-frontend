import {Component} from '@angular/core';
import {LayoutService} from "./services/app.layout.service";

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html'
})
export class AppFooterComponent {

    constructor(public layoutService: LayoutService) {}

    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }
}
