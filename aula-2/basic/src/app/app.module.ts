import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './03-angular-test-bed/hello.component';

import { AppComponent } from './app.component';
import { FilterPipe } from './05-pipe/filter.pipe';
import { CounterPropertyBindingComponent } from './04-property-binding/counter-property-binding.component';
import { LoginFixtureComponent } from './08-fixture/login-fixture.component';
import { BannerBasicComponent } from './09-component-basic/banner-basic.component';
import { WelcomeComponent } from './10-component-service-stub/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './14-mocking-with-spies/login.component';
import { InputComponent } from './12-component-input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterPropertyBindingComponent,
    FilterPipe,
    LoginFixtureComponent,
    BannerBasicComponent,
    WelcomeComponent,
    LoginComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
