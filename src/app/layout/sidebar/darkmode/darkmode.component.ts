import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PrimeNG } from 'primeng/config';

import Aura from '@primeng/themes/aura';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-darkmode',
  standalone: true,
  imports: [ToggleSwitchModule, FormsModule],
  templateUrl: './darkmode.component.html',
  styleUrl: './darkmode.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
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





  darkThemeSwitchTokens = {
    // width: '3rem',
    height: '2.25rem',
    Background: '#fff',
    HoverBackground: '#eee',
    checkedBackground: '#111',
    checkedHoverBackground: '#000',
    handle: {
      size: '1.5rem',
      background: 'transparent url("https://static-00.iconduck.com/assets.00/sun-with-face-emoji-2048x2048-jsb953ux.png") 0 0 / 1.5rem no-repeat',
      hoverBackground: 'transparent url("https://static-00.iconduck.com/assets.00/sun-with-face-emoji-2048x2048-jsb953ux.png") 0 0 / 1.5rem no-repeat',
      checkedBackground:
        'transparent url("https://symbl-world.akamaized.net/i/webp/49/e48f4222f1bac554c513f44e7b0591.webp") 0 0 / 1.5rem no-repeat',
      checkedHoverBackground:
        'transparent url("https://symbl-world.akamaized.net/i/webp/49/e48f4222f1bac554c513f44e7b0591.webp") 0 0 / 1.5rem no-repeat',
    },
  };
}
