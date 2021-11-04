import { By } from "@angular/platform-browser";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListComponent } from './people-list.component';

describe('PeopleListComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list names', () => {
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    component.people = [{ name: 'Mauricio' }, { name: 'Jose' }, { name: 'Junior' }]
    fixture.detectChanges();

    const listNames = fixture.debugElement.queryAll(By.css('#people-list li'));
    expect(listNames[0].nativeElement.textContent.trim()).toEqual('Mauricio');
    expect(listNames[1].nativeElement.textContent.trim()).toEqual('Jose');
    expect(listNames[2].nativeElement.textContent.trim()).toEqual('Junior');
  })


  it('should emit person name on click', () => {
    component.people = [{ name: 'Mauricio' },
    { name: 'Jose' },
    { name: 'Junior' }];
    fixture.detectChanges();

    const firstName = fixture.debugElement.query(By.css('#people-list li'));

    component.peopleSelected.subscribe((response) => {
      expect(response).toEqual('Mauricio');
    });

    firstName.triggerEventHandler('click', null);
  });

});
