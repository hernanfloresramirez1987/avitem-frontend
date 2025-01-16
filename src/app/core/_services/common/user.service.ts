import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly #url= environment.URL_API;

  sexo!: { name: string, key: string }[];
  cargo!: { name: string; code: number }[];
  tipo!: { name: string; code: number }[];
  rol!: { name: string; code: string }[];
  
  constructor(private http: HttpClient) { }
  
  getExpedidoOptions(): Observable<{ name: string; code: string }[]> {
    return of([
    { name: 'La Paz', code: 'LP' },
    { name: 'Santa Cruz', code: 'SC' },
    { name: 'Cochabamba', code: 'CB' },
    { name: 'Oruro', code: 'OR' },
    { name: 'Potosí', code: 'PO' },
    { name: 'Chuquisaca', code: 'CH' },
    { name: 'Tarija', code: 'TA' },
    { name: 'Beni', code: 'BE' },
    { name: 'Pando', code: 'PA' },
    { name: 'China', code: 'china'},
  ])};


  getCargo(): Observable<{ name: string; code: number }[]> {
    return of([
    { name: 'Gerente', code: 1 },
    { name: 'Administrador', code: 2 },
    { name: 'Vendedor', code: 3 },
    { name: 'Contador', code: 4 },
    
])};

  getSexo = () => of([
    { name: 'Varon', key: 'V' },
    { name: 'Mujer', key: 'M' }
  ]);

  getTipo(): Observable<{ name: string; code: number }[]> {
    return of([
    { name: 'Interno', code: 1 },
    { name: 'Externo', code: 2 },
    { name: 'Temporal', code: 3 },
    { name: 'Permanente', code: 4 },
  ])};

  getRol(): Observable<{ name: string; code: string }[]> {
    return of([  // Added return statement
    { name: 'Administrador', code: 'admin' },
    { name: 'Usuario', code: 'user' },
    { name: 'Invitado', code: 'guest' }
  ])};
}