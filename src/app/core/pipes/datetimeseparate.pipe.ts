import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateTimeSeparate',
  standalone: true
})
export class DateTimeSeparatePipe implements PipeTransform {

  transform(value: string, format: string = 'medium'): string {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(value, 'dd/MM/yyyy', 'UTC');
    const formattedTime = datePipe.transform(value, 'shortTime', 'UTC');

    return `${formattedDate}\n${formattedTime}`;
  }

}
