import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxCharacter'
})
export class MaxCharacterPipe implements PipeTransform {

  transform(value: string, maxCharacter: number = 20): string {
    if (typeof value !== 'string') {
      console.error('O valor passado para este pipe precisa ser uma string');
    }

    if(value.length <= maxCharacter) {
      return value;
    }

    return value.slice(0, maxCharacter) + '...';
  }

}
