import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdate'
})
export class FormatdatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(value);
    return monthArray[date.getMonth()] + ' ' + date.getUTCDate();
  }
}
