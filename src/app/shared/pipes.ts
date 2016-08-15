import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'take'
})

export class TakePipe implements PipeTransform {
  transform(items: any[], numItems: number): any {
    if (items)
      return items.slice(0, numItems);
    else return items;
  }
}
