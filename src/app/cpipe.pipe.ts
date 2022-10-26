import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpipe'
})
export class CpipePipe implements PipeTransform {
  nvalue!: string;

  transform(value: string, ...args: unknown[]): any {
    this.nvalue = value.split('').reverse().join('');
    return this.nvalue;
  }

}
