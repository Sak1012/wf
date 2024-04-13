import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Import this

import { AppComponent } from './app.component';
import { InterpolationPropertyBindingComponent } from './interpolation-property-binding/interpolation-property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationPropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // <-- Add this to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
