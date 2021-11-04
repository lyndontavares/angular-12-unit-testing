import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

    transform(value: string): string {
    // Just for the test purpose
    // we do not use any translation services.
    return `translated:${value}`;
  }
}
