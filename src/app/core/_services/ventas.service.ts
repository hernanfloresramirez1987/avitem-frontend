import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  readonly #url= environment.URL_API;

  constructor(private http: HttpClient) { }

  
}
