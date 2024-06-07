import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getEntires',
  standalone: true,
})
export class GetEntiresPipe implements PipeTransform {
  transform(
    value: { [key: string]: string | boolean },
    ...args: unknown[]
  ): any {
    if (value) return Object.entries(value);
    else return [];
  }
}
