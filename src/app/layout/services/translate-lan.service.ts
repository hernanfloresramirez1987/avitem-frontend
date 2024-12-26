import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TranslateLanService {

  static lan = environment.defaultLanguage

  changeLanguage$ = new Subject<string>();
}
