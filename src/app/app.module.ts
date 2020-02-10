import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2/';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { SimpleComponent } from './simple.component';
import { FormsModule } from '@angular/forms';
import { SimpleComponent } from './simple/simple.component';
// import { FormsModule } from '@angular/forms';

export const environment  = {
   firebaseConfig : {
    apiKey: "AIzaSyDMnGH7Yd8ur9eKYlDtcibugkAwv4-HuF8",
    authDomain: "angu-chat.firebaseapp.com",
    databaseURL: "https://angu-chat.firebaseio.com",
    projectId: "angu-chat",
    storageBucket: "angu-chat.appspot.com",
    messagingSenderId: "50909560705",
    appId: "1:50909560705:web:64e8c214ab248993793280"
  }
}

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
