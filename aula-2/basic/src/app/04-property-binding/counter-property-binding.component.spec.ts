import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";

import { CounterPropertyBindingComponent } from './counter-property-binding.component';

describe('CounterPropertyBindingComponent', () => {
  let component: CounterPropertyBindingComponent;
  let fixture: ComponentFixture<CounterPropertyBindingComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [CounterPropertyBindingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CounterPropertyBindingComponent', () => {
    expect(component).toBeTruthy();
  });

  /* binding property - interpolation */
  it('should bind-show-render totalCount', () => {
    component.othersCount = 10
    component.myCount = 5;
    fixture.detectChanges();

    let totalCountTextElement = fixture.debugElement.queryAll(By.css('span'));
    let totalCountTextNativeElement: HTMLElement = totalCountTextElement[1].nativeElement;

    expect(totalCountTextNativeElement.getAttribute('class')).toBe('totalCountText');
  });

  /* binding style/class */
  it('should highlight the upCount button if totalCounts is 1', () => {
    component.myCount = 1;
    fixture.detectChanges();
    let upCountButtonElement = fixture.debugElement.query(By.css('.icon-menu-up.count-button'));
    expect(upCountButtonElement.classes['highlighted']).toBeTruthy();
  });

  /* binding event */
  it('should increase totalCounts by 1 when upCount button clicked', () => {
    let upCountButtonElement = fixture.debugElement.query(By.css('.icon-menu-up.count-button'));
    upCountButtonElement.triggerEventHandler('click', null);
    expect(component.totalCounts).toEqual(1);
  });

});
