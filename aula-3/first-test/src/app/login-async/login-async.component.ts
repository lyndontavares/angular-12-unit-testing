import { Component } from '@angular/core';
import { AuthAsyncService } from "./auth-async.service";

@Component({
  selector: 'app-login-async',
  template: `<a>
    <span *ngIf="needsLogin">Login</span>
    <span *ngIf="!needsLogin">Logout</span>
  </a>`
})
export class LoginAsyncComponent {

  needsLogin: boolean = true;

  constructor(private auth: AuthAsyncService) {
  }

  ngOnInit() {
    this.auth.isAuthenticated().then((authenticated) => {
      this.needsLogin = !authenticated;
    })
  }
}
