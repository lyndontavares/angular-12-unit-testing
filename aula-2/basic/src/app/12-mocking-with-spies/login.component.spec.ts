import { LoginComponent } from './login.component';
import { AuthService } from "./auth.service";

/*

    Um  Spy é um recurso do Jasmine que permite que você pegue uma classe,
    função ou objeto existente e  simule -o de forma que você possa
    controlar o que é retornado das chamadas de função.

*/

describe('12-mocking-with-spies: Login', () => {

    let component: LoginComponent;
    let service: AuthService;
    let spy: any;

    beforeEach(() => {
        //(1) Criamos uma instância real de  AuthServicee a injetamos no  LoginComponent.
        service = new AuthService();
        component = new LoginComponent(service);
    });

    afterEach(() => {
        //(2) Em nossa função de desmontagem, não há necessidade de excluir o token de localStorage.
        service = null;
        component = null;
    });


    it('needsLogin returns true when the user has not been authenticated', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(false); //(3) Criamos um spy em nosso servicepara que, se a  isAuthenticatedfunção for chamada, ela retorne false
        expect(component.needsLogin()).toBeTruthy();
        expect(service.isAuthenticated).toHaveBeenCalled(); //(4) Podemos até verificar se a isAuthenticatedfunção foi chamada.

    });

    it('needsLogin returns false when the user has been authenticated', () => {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });
});
