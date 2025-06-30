import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bolivianos'
})
export class BolivianosPipe implements PipeTransform {
  transform(value: any, decimales: number = 2): string {
    const numero = Number(value);

    if (isNaN(numero)) return 'Bs 0.00';

    const formatted = numero
      .toFixed(decimales)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return `Bs ${formatted}`;
  }
}