/*
  Podemos criar uma AuthServicechamada falsa MockedAuthServiceque
  retorna apenas o que queremos para o nosso teste.

  Podemos até remover a  AuthServiceimportação se quisermos,
  realmente não há dependência de mais nada. O  LoginComponenté testado isoladamente
*/

import { LoginComponent } from "./login.component";

class MockAuthService {
    authenticated = false;

    isAuthenticated() {
        return this.authenticated;
    }
}

describe('AuthService - teste com mocks', () => {

    let component: LoginComponent;
    let service: MockAuthService;

    beforeEach(() => {
        service = new MockAuthService();
        component = new LoginComponent(service);
    });

    afterEach(() => {
        service = null;
        component = null;
    });

    it('needsLogin returns true when the user has not been authenticated', () => {
        service.authenticated = false; (3)
        expect(component.needsLogin()).toBeTruthy();
    });

    it('needsLogin returns false when the user has been authenticated', () => {
        service.authenticated = true; (3)
        expect(component.needsLogin()).toBeFalsy();
    });
});
