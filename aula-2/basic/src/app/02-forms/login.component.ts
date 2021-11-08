import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";

export class LoginFormComponent {

    loginForm: FormGroup;

    constructor(loginFB: FormBuilder) {

        this.loginForm = loginFB.group({

            name: ['', Validators.required],
            password: ['', Validators.minLength(8)],
            email: ['', Validators.email]

        })

    }

}
