import { Injectable } from '@angular/core';
import { ObjectsutilService } from './objectsutil.service';

@Injectable({
  providedIn: 'root'
})
export class ArrayutilService {

  constructor(private objectutil: ObjectsutilService) { }

  selectOrderedArray(arrayOrdered: any[],arrayUnordered: any[]): any[] {
    let ordenado: any[] = [];

    for (const obj of arrayOrdered) {
      const encontrado = arrayUnordered.find(s =>this.objectutil.areEqual(s,obj));
      if (encontrado) {
        ordenado.push(encontrado);
      }
    }
    return ordenado;
  }
}