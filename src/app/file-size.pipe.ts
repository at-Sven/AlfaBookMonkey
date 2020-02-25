import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(value: number): string {

    const result = value / 1024;

    if (result >= 1024) {
      return result + ' MB';
    } else {
      return result + ' KB';
    }
  }

}
