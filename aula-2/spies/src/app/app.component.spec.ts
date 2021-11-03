import { TestBed } from '@angular/core/testing';
import { AppComponent, Person } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('deve chamar a função `podeBeberAlcool` quando `serveDrink` for chamado', () => {
    //preparação
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const fnc = spyOn( component, 'podeBeberAlcool')
    const person : Person = { idade: 18, bebidaFavorita: null }
    //ação
    component.serveDrink(person)
    //assertiva
    expect(fnc).toHaveBeenCalled()
  });

  it('deve passar a idade ao chamar `podeBeberAlcool` quando `serveDrink` for chamado', () => {
    //preparação
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const fnc = spyOn(component, 'podeBeberAlcool')
    const person: Person = { idade: 14, bebidaFavorita: null }
    //ação
    component.serveDrink(person)
    //assertiva
    expect(fnc).toHaveBeenCalledWith(14)
  });



});
