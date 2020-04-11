import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: string): string {
    value.substr(0,2);
    return null;
  }

}
