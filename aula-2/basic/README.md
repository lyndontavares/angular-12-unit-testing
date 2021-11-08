# Basic

## Tripple A - AAA - 3A - Arrang, Act and Assert pattern/structure

The `AAA (Arrange, Act, Assert) pattern/structure` is a common way of writing unit tests for a method under test. It suggests that you should divide your test method into three sections: `arrange, act and assert`. It also makes the test more clean and readable.

- **Arrang**:
  - Initialize system under test
  - The `Arrange` section of a unit test method `initializes objects` and `sets the value` of the data that is passed to the method under test
  - ```let component = new ComponentToCheck();```

- **Act**:
  - Calling a method/function which perform some activity
  - ```component.methodFunction();```

- **Assert**:
  - The fact to check/test
  - The `Assert section verifies` that the action of the method under test behaves as expected


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
