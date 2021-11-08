
import { FormBuilder } from "@angular/forms";
import { LoginFormComponent } from "./login.component";

describe('LoginFormComponent', () => {

    let loginFormComponent: LoginFormComponent;

    beforeEach(() => {

        loginFormComponent = new LoginFormComponent(new FormBuilder);

    })

    it('should create a form with 3 controls', () => {

        expect(loginFormComponent.loginForm.contains('name')).toBe(true);
        expect(loginFormComponent.loginForm.contains('password')).toBeTruthy();
        expect(loginFormComponent.loginForm.contains('email')).toBeTruthy();

    })

    it('should make the name control required', () => {

        let nameControl = loginFormComponent.loginForm.get('name');

        nameControl.setValue('');

        expect(nameControl.valid).toBeFalsy();

    })

    it('should use password with minimum 8 characters', () => {

        let passwordControl = loginFormComponent.loginForm.get('password');

        passwordControl.setValue('12345678')

        expect(passwordControl.valid).toBeTruthy();

    })

    it('should validate the email input type', () => {

        let emailControl = loginFormComponent.loginForm.get('email');

        emailControl.setValue('dinanathj@gmail.com')

        expect(emailControl.valid).toBeTruthy();

    })

})
