import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-people-list',
  template: `<ul id="people-list">
              <li (click)="selectPeople(person)" *ngFor="let person of people"> {{person.name}} </li>
            </ul>`,
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  @Input() people;
  @Output() peopleSelected = new EventEmitter<string>();

  constructor() { }

  selectPeople(person) {
    this.peopleSelected.emit(person.name);
  }
}
