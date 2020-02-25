import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(value: string) {

    const buffer = value.split(' ');
    const result = buffer[0].split('');

    const output: string = result[0] + '. ' + buffer[1];

    return output;
  }



}
