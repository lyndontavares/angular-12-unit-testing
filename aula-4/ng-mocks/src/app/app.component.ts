import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header [showLogo]="true" [title]="title" (logo)="logoClick.emit()">
      <ng-template #menu>
        <ul>
          <li>
            <a [routerLink]="['/home']">{{ 'Home' | translate }}</a>
          </li>
          <li>
            <a [routerLink]="['/about']">{{ 'About' | translate }}</a>
          </li>
        </ul>
      </ng-template>
    </app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  @Output() public logoClick = new EventEmitter<void>();
  @Input() public title = 'My Application';
}
