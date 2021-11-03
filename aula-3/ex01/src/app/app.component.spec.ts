import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture : ComponentFixture<AppComponent>;
  let component : AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });


  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ex01'`, () => {
    expect(component.title).toEqual('ex01');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ex01 app is running!');
  });

  it( 'Deve retornar a soma de 2 números', () => {
    //preparação
    const a = 1
    const b = 256
    const c = component.soma(a,b)
    expect(c).toEqual(a+b)
  } )

  it('Deve mostrar exceção se algum parâmtro não for número', () => {
    //preparação
    const a = 1
    const b = null
    expect( ()=> {
      component.soma(a,b)
    }).toThrow('Parametros invalidos! Somente numeros sao permitidos')
  })


});
