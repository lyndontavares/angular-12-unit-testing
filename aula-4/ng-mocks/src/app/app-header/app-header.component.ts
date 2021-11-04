import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <a (click)="logo.emit()">
      <img src="assets/logo.png" *ngIf="showLogo" />
    </a>
    {{ title }}
    <template [ngTemplateOutlet]="menu"></template>
  `,
})
export class AppHeaderComponent {
  @Output() public readonly logo = new EventEmitter<void>();
  @ContentChild('menu') public menu?: TemplateRef<ElementRef>;
  @Input() public showLogo = false;
  @Input() public title = '';
}
