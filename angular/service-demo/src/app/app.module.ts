import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Add this line
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
