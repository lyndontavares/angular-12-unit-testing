import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';

describe('AuthService - teste com classes reais', () => {
  let service: AuthService;
  let component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    component = new LoginComponent(service);
  });

  afterEach(() => {
    localStorage.removeItem('token');
    service = null;
    component = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('needsLogin returns false when the user has been authenticated', () => {
    localStorage.setItem('token', '12345');
    expect(component.needsLogin()).toBeFalsy();
  });

});
