import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
