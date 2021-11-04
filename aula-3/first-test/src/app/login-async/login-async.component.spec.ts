import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { LoginAsyncComponent } from './login-async.component';
import { AuthAsyncService } from './auth-async.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('LoginAsyncComponent', () => {
  let component: LoginAsyncComponent;
  let fixture: ComponentFixture<LoginAsyncComponent>;
  let authAsync: AuthAsyncService;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAsyncComponent ],
      providers: [ AuthAsyncService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authAsync = TestBed.inject(AuthAsyncService);
    el = fixture.debugElement.query( By.css('a'))
  });


  /*
    (1) We issue our first change detection run so the view does its initial update.
    (2) We expect the button text to display Login
    (3) We change our AuthService so it returns a promise resolved to true.
    (4) We call component.ngOnInit().
    (5) We issue our second change detection run.
    (6) We now expect the button text to read Logout.
  */

  it('Button label without jasmine.done', () => {
    fixture.detectChanges(); (1)
    expect(el.nativeElement.textContent.trim()).toBe('Login'); (2)
    spyOn(authAsync, 'isAuthenticated').and.returnValue(Promise.resolve(true)); (3)
    component.ngOnInit(); (4)
    fixture.detectChanges(); (5)
    expect(el.nativeElement.textContent.trim()).toBe('Logout'); (6)
  });


  /*
    (1) The Jasmine test spec function is passed a function as the first param, we usually call this parameter done.
    (2) We can add a callback function (using the spy) which is called when the promise returned from isAuthenticated function resolved.
        In this function we know that the component has the new value of needsLogin and we can add our additional expectation here.
    (3) When we are done with our asynchronous tasks we tell Jasmine via the done function.
  */

  it('Button label via jasmine.done', (done) => { (1)
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    let spy = spyOn(authAsync, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    spy.calls.mostRecent().returnValue.then(() => { (2)
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
      done(); (3)
    });
  });

  /*
    (1) We wrap our test spec function in another function called async.
    (2) We place the tests we need to run after the isAuthenticated promise resolves inside this function.

    This async function executes the code inside its body in a special async test zone. This intercepts and keeps track of all promises created in its body.

    Only when all of those pending promises have been resolved does it then resolves the promise returned from whenStable.

    So by using the async and whenStable functions we now don’t need to use the Jasmine spy mechanism of detecting when the isAuthenticated promise has been resolved, like the previous example.

    This mechanism is slightly better than using the plain Jasmine solution but there is another version which gives us fine grained control and also allows us to lay out our test code as if it were synchronous.
  */

  it('Button label via async/waitForAsync() and whenStable()', waitForAsync(() => { (1)
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authAsync, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    fixture.whenStable().then(() => { (2)
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });
    component.ngOnInit();
  }));


  /*
    (1) Like async we wrap the test spec function in a function called fakeAsync.
    (2) We call tick() when there are pending asynchronous activities we want to complete.

    Like the async function the fakeAsync function executes the code inside its body in a special fake async test zone. This intercepts and keeps track of all promises created in its body.

    The tick() function blocks execution and simulates the passage of time until all pending asynchronous activities complete.

    So when we call tick() the application sits and waits for the promise returned from isAuthenticated to be resolved and then lets execution move to the next line.

    The code above is now layed our linearly, as if we were executing synchronous code, there are no callbacks to confuse the mind and everything is simpler to understand.
  */

  it('Button label via fakeAsync() and tick()', fakeAsync(() => { (1)
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authAsync, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    tick(); (2)
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  }));

});
