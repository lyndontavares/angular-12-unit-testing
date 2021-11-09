import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent Stub', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userServiceStub: Partial<UserService> = {
    isLoggedIn: false,
    user: { name: 'no user' },
  };
  let userService: UserService;
  let el: HTMLElement;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      providers: [{ provide: UserService, useValue: userServiceStub }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    // UserService from the root injector
    userService = TestBed.inject(UserService);
    //  get the "welcome" element by CSS selector (e.g., by class name)
    el = fixture.nativeElement.querySelector('.welcome');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should welcome the user', () => {
    userService.user.name = 'Test User'; // welcome message hasn't been shown yet
    userService.isLoggedIn = true;
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toEqual('Welcome, Test User');
  });

  it('should welcome "Lyndon Tavares"', () => {
    userService.user.name = 'Admin User'; // welcome message hasn't been shown yet
    userService.isLoggedIn = true;
    fixture.detectChanges();
    expect(el.textContent).toContain('Admin User');
  });

  it('should request login if not logged in', () => {
    userService.isLoggedIn = false; // welcome message hasn't been shown yet
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  });

});
