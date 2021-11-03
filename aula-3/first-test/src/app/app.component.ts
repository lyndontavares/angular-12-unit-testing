import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex01';

  soma( a: any, b: any) {


    console.log(a,b)
    if ( typeof a !== 'number' || typeof b  !== 'number') {
      throw ('Parametros invalidos! Somente numeros sao permitidos')
    }
    return a + b;
  }

}
