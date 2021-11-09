import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFixtureComponent } from './login-fixture.component';

describe('LoginFixtureComponent', () => {
  let component: LoginFixtureComponent;
  let fixture: ComponentFixture<LoginFixtureComponent>; //(1)) FIXTURE é um wrapper para um componente e seu template

  beforeEach(async () => {
    await TestBed.configureTestingModule({ //(2) The Angular Test Bed (ATB) is a higher level Angular Only testing framework that allows us to easily test behaviours that depend on the Angular Framework
      declarations: [ LoginFixtureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFixtureComponent); //(3) Criamos uma instância de um acessório de componente FIXTUE por meio do TestBed, isso injeta o  AuthService no construtor do componente.
    component = fixture.componentInstance; //(4) Podemos encontrar o real componente do componentInstance em FIXTURE
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('login-fixture works!');
  });


});
