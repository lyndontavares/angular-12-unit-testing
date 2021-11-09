import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './04-angular-test-bed/hello.component';

import { AppComponent } from './app.component';
import { FilterPipe } from './06-pipe/filter.pipe';
import { CounterPropertyBindingComponent } from './05-property-binding/counter-property-binding.component';
import { LoginFixtureComponent } from './09-fixture/login-fixture.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterPropertyBindingComponent,
    FilterPipe,
    LoginFixtureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
