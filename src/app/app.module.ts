import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataSelectorComponent } from './components/data-selector/data-selector.component';
import { DataDisplayComponent } from './components/data-display/data-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DataSelectorComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
