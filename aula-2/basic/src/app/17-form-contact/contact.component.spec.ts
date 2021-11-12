import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let el: HTMLElement
  let de: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [ BrowserModule, FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as text contact page', waitForAsync(() => {
    expect(component.title).toEqual('Contact Form')
  }));

  it('should set submit to true', waitForAsync(() => {
    component.onSubmit();
    expect(component.submited).toBeTruthy();
  }));

  it('should call the onSubmit method', () => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  })

  it('form should be invalid', () => {
    fixture.detectChanges();
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  })

  it('form should be valid', () => {
    fixture.detectChanges();
    component.contactForm.controls['name'].setValue('test');
    component.contactForm.controls['email'].setValue('test');
    component.contactForm.controls['text'].setValue('test');
    expect(component.contactForm.valid).toBeTruthy();
  })

});
