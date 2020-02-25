import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSentence'
})

export class ToSentencePipe implements PipeTransform {

  transform(value: string[]) {
    let output = '';

    for (let index = 0; index < value.length; index++) {

      if (index === (value.length - 1)) {
        return output.slice(0, -2) + ' und ' + value[index];
      } else {
        output += value[index] + ', ';
      }
    }
  }

}
