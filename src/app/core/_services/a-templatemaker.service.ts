import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ATemplateMakerService {
  readonly #url= `http://127.0.0.1:8080/api/templates/`;
  private readonly http: HttpClient = inject(HttpClient);

  data = {
    "account_id": 9,
    "account": "SRL RAPID",
    "image_path": "https://imagedelivery.net/GxvlXjAl8WY58YDVcutV_g/2290ae46-7be8-4015-2d43-c9d4523f6000/public",
    "product_id": 238,
    "sku": "BERLIN-5",
    "barcode": "BERLIN-5",
    "description": "Balon Futbol Kaiser",
    "total_on_hand": 9576,
    "available": 3696,
    "asign": 252,
    "reserved": 3528,
    "blocked": 0,
    "hurt": 2100,
    "cross_dock": 0,
    "in_transit": 0,
    "back_order": 0
  };

  redirectToBackend() {
    const stringifiedData = Object.entries(this.data).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: String(value)
    }), {});
    const queryString = new URLSearchParams(stringifiedData).toString();
    window.location.href = `${this.#url}getcomponents/extern?${queryString}`;
  }


  sendDataToBackend() {
    const stringifiedData = Object.entries(this.data).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: String(value)
    }), {});
    console.log(stringifiedData, '\n');
   
    const queryString = new URLSearchParams(stringifiedData).toString(); 
    console.log(queryString, '\n');
    
    this.http.post(`${this.#url}getcomponents/extern/`, this.data).subscribe(
      (response) => {
        console.log('Datos enviados con éxito:', response);
        // Redirige después del procesamiento
        window.location.href = `${this.#url}getcomponents/`;
      },
      (error) => {
        console.error('Error al enviar datos:', error);
      }
    );
  }
}
