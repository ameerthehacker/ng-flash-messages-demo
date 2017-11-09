import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFlashMessagesModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
