import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySort'
})
export class ArraySortPipe implements PipeTransform {

  transform(value: string[]) {

    const output = new Array(value.sort((l, u) => {
      return l.toLowerCase().localeCompare(u.toLowerCase());
    }));

    return output;
  }

}
