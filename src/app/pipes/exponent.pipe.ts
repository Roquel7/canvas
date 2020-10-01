import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponent'
})
export class ExponentPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    console.log('args', args);
    const exp = Number(args[0]);

    if (isNaN(exp)) {
      return value;
    }

    return Math.pow(value, exp );
  }

}
