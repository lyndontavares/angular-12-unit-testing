import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './04-angular-test-bed/hello.component';

import { AppComponent } from './app.component';
import { FilterPipe } from './06-pipe/filter.pipe';
import { CounterPropertyBindingComponent } from './05-property-binding/counter-property-binding.component';
import { LoginFixtureComponent } from './09-fixture/login-fixture.component';
import { BannerBasicComponent } from './10-component-basic/banner-basic.component';
import { WelcomeComponent } from './11-component-service-stub/welcome.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterPropertyBindingComponent,
    FilterPipe,
    LoginFixtureComponent,
    BannerBasicComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
