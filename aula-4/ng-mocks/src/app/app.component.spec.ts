import { TestBed } from '@angular/core/testing';
import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { TranslatePipe } from './translate.pipe';

describe('main', () => {
  // Usually, we would have something like that.
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [
  //       CommonModule,
  //       RouterModule.forRoot([]),
  //     ],
  //     declarations: [
  //       AppComponent,
  //       AppHeaderComponent,
  //       TranslatePipe,
  //     ],
  //   });
  //
  //   fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  // });
  // But, usually, instead of AppHeaderComponent and TranslatePipe
  // we want to have mocks.

  // With ng-mocks it can be defined in the next way.
  beforeEach(() => {
    // AppComponent will stay as it is,
    // everything in AppModule will be replaced with their mocks.
    return (
      MockBuilder(AppComponent, AppModule)
        // Adding a special config how to create
        // a mock AppHeaderComponent.
        .mock(AppHeaderComponent, {
          render: {
            // #menu template will be rendered simultaneously
            // with the mock AppHeaderComponent.
            menu: true,
          },
        })
        // a fake transform handler.
        .mock(TranslatePipe, v => `fake:${v}`)
    );
    // the same as
    // TestBed.configureTestingModule({
    //   imports: [
    //     MockModule(CommonModule),
    //     MockModule(RouterModule.forRoot([])),
    //   ],
    //   declarations: [
    //     AppComponent, // <- keeping it as it is.
    //     MockComponent(AppHeaderComponent),
    //     MockPipe(TranslatePipe, v => `fake:${v}`),
    //   ],
    // });
    // return testBed.compileComponents();
    //
    // of if we used ngMocks.guts
    // TestBed.configureTestingModule(ngMocks.guts(
    //   AppComponent, // <- keeping it as it is.
    //   AppModule,
    // ));
    // return testBed.compileComponents();
    // But in this case TranslatePipe will return undefined,
    // if we do not customize it via MockInstance or defaultMock.
  });

  it('asserts behavior of AppComponent', () => {
    const logoClickSpy = jasmine.createSpy();
    // in case of jest
    // const logoClickSpy = jest.fn();

    // Instead of TestBed.createComponent(AppComponent) in beforeEach
    // MockRender might be used directly in tests.
    const fixture = MockRender(AppComponent, {
      logoClick: logoClickSpy,
      title: 'Fake Application',
    });
    // It creates a helper component
    // with the next template:
    // <app-root
    //   [title]="'Fake Application'"
    //   (logoClick)="logoClickSpy($event)"
    // ></app-root>
    // and renders it via TestBed.createComponent(HelperComponent).
    // AppComponent is accessible via fixture.point.

    // The same as fixture.debugElement.query(
    //   By.directive(AppHeaderComponent)
    // );
    // but type safe and fails if nothing has been found.
    const header = ngMocks.find(AppHeaderComponent);

    // Verifies how AppComponent uses AppHeaderComponent.
    expect(header.componentInstance.showLogo).toBe(true);
    expect(header.componentInstance.title).toBe('Fake Application');

    // Checking that AppComponents updates AppHeaderComponent.
    fixture.componentInstance.title = 'Updated Application';
    fixture.detectChanges();
    expect(header.componentInstance.title).toBe('Updated Application');

    // Checking that AppComponent listens on outputs of
    // AppHeaderComponent.
    expect(logoClickSpy).not.toHaveBeenCalled();
    header.componentInstance.logo.emit();
    expect(logoClickSpy).toHaveBeenCalled();

    // Verifies that AppComponent passes the right menu into
    // AppHeaderComponent.
    const links = ngMocks.findAll(header, 'a');
    expect(links.length).toBe(2);
    const [link1, link2] = links;

    // Checking that TranslatePipe has been used.
    expect(link1.nativeElement.innerHTML).toEqual('fake:Home');
    // An easy way to get a value of an input. The same as
    // links[0].injector.get(RouterLinkWithHref).routerLink
    expect(ngMocks.input(link1, 'routerLink')).toEqual(['/home']);

    expect(link2.nativeElement.innerHTML).toEqual('fake:About');
    expect(ngMocks.input(link2, 'routerLink')).toEqual(['/about']);
  });
});
