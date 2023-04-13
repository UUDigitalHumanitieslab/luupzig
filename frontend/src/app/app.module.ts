import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LuupzigModule } from 'luupzig';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LuupzigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
