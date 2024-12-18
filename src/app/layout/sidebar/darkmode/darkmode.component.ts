import { Component, inject, signal } from '@angular/core';
import { PrimeNG } from 'primeng/config';

import Aura from '@primeng/themes/aura';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-darkmode',
  standalone: true,
  imports: [ToggleSwitchModule, FormsModule],
  templateUrl: './darkmode.component.html',
  styleUrl: './darkmode.component.css'
})
export class DarkmodeComponent {
  isDarkMode = signal(false);

  constructor(public primeNG: PrimeNG) {
    this.primeNG.theme.set({ // Use 'this.primeNG' instead of 'primeng'
      preset: Aura,
      options: {
        darkModeSelector: '.dark',
      },
    });
}

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
    this.isDarkMode.set(!this.isDarkMode());
  }
}
