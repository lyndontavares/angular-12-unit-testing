import { Component } from '@angular/core';

export interface Person {
  age: number;
  favoriteDrink?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-unit-test-tutorial';

  /**
   * Function that will calculate and return sum of input variables
   */
  sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw('Invalid parameters! Only numbers are allowed.')
    }
    return a + b;
  }

  /**
   * Determine the most suitable drink for each person
   */
  serveDrink(person: Person): string {
    // Return this Person's favorite drink if possible
    if (person.favoriteDrink) {
      return person.favoriteDrink;
    }
    if (this.canDrinkAlcohol(person.age)) {
      return 'Beer';
    }
    return 'Juice';
  }

  /**
   * Determine if a Person can drink alcohol
   */
  canDrinkAlcohol(age: number): boolean {
    return age >= 18;
  }
}
