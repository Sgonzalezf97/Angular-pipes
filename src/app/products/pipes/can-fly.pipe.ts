import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class canFlyPipe implements PipeTransform {
  transform(value: boolean):  'Si vuela'|'No vuela'{
      return(value)? 'Si vuela':'No vuela';
  }
}
