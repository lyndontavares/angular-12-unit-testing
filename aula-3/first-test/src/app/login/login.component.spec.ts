import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>; //(1)) FIXTURE é um wrapper para um componente e seu template
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({  //(2) The Angular Test Bed (ATB) is a higher level Angular Only testing framework that allows us to easily test behaviours that depend on the Angular Framework
      declarations: [ LoginComponent ],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent); //(3) Criamos uma instância de um acessório de componente FIXTUE por meio do TestBed, isso injeta o  AuthService no construtor do componente.
    component = fixture.componentInstance; //(4) Podemos encontrar o real componente do componentInstance em FIXTURE
    fixture.detectChanges();
    authService = TestBed.inject(AuthService); //(5) Podemos resolver dependências usando o injetor TestBed usando a função get
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deverá chamar isAuthenticated', () => {
    expect(authService.isAuthenticated()).not.toBeTrue()
  });

  it('needsLogin returns true when the user has not been authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('needsLogin returns false when the user has been authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

});
