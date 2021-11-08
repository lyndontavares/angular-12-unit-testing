import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './04-angular-test-bed/hello.component';

import { AppComponent } from './app.component';
import { CounterPropertyBindingComponent } from './05-property-binding/counter-property-binding/counter-property-binding.component';
import { FilterPipe } from './06-pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterPropertyBindingComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
