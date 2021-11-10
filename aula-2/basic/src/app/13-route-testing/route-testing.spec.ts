import { Location } from '@angular/common';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HelloComponent } from '../03-angular-test-bed/hello.component';
import { WelcomeComponent } from '../10-component-service-stub/welcome.component';
import { routes } from '../app-routing.module';
import { AppComponent } from '../app.component';

describe('Router: App', () => {

    let location: Location;
    let router: Router;

    // Configure router testing module
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes)
            ],
            declarations: [
                AppComponent,
                WelcomeComponent,
                HelloComponent
            ],
            providers: [Location]
        }).compileComponents();

        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
    });

    it('navigate to "" redirects you to /welcome', fakeAsync(() => {
        const fixture = TestBed.createComponent(WelcomeComponent);
        router.navigateByUrl('');
        tick();
        fixture.detectChanges();
        expect(location.path()).toBe('/welcome');
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.title').textContent).toContain('Welcome');
    }));

    it('navigate to "feature" redirects to /hello', fakeAsync(() => {
        const fixture = TestBed.createComponent(HelloComponent);
        router.navigateByUrl('/hello');
        tick();
        fixture.detectChanges();
        expect(location.path()).toBe('/hello');
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.title').textContent).toContain('Hello');
    }));
});
