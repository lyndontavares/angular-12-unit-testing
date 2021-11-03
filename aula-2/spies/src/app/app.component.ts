import { Component } from '@angular/core';

export interface Person {
  idade: number;
  bebidaFavorita: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'spies';

  serveDrink( person:Person ) : string {
    if (person.bebidaFavorita) {
      return person.bebidaFavorita
    }
    if (this.podeBeberAlcool(person.idade)) {
      return 'Cerveja'
    }
    return 'Suco de Laranja'
  }

  podeBeberAlcool(idade:number ) : boolean {
    return idade>18
  }
}
