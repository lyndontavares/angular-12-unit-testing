import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-welcome',
  template: '<h1 class="title">Welcome</h1> <h3 class="welcome"><i>{{welcome}}</i></h3>'
})
export class WelcomeComponent implements OnInit {

  welcome = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn ?
      'Welcome, ' + this.userService.user.name : 'Please log in.';
  }

}
