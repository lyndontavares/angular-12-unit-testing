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
    //ação
    const c = component.soma(a,b)
    //assert
    expect(c).toEqual(a+b)

  } )


});
