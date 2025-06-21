import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjectsutilService {

  toColumns(objeto: any): any[] {
    const keysOfProps = objeto;
    return Object.getOwnPropertyNames(keysOfProps).map(key => {
      return {
        field: key,
        header: key
      };
    });
  }

  addColumnInInit = (arra: any, add: any): any[] => [add, ...arra];

  areEqual = (obj1: any, obj2: any) => JSON.stringify(obj1) == JSON.stringify(obj2);
}