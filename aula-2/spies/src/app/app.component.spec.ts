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


  it('deve retornar Cerveja quado  `serveDrink` for chamado e se `podeBeberAlcool` retorna true', () => {
    //preparação
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // returnValue(true) : informa o valor a ser retornado por podeBeberAlcool
    // (*) returnValue aceita múltipos parâmetros, que serão os valores de retorno por ordem de chamada
    // ex: returnValues(true, false) da primeira vez, retorna true e numa segunda chamdama, retornará false
    const fnc = spyOn(component, 'podeBeberAlcool').and.returnValue(true)

    const person: Person = { idade: 14, bebidaFavorita: null }
    //ação
    const result = component.serveDrink(person)
    //assertiva
    expect(result).toEqual('Cerveja')
  });




});
