import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AutenticacaoService } from '../services/autenticacao'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from "angularfire2";
import {AngularFireDatabase } from 'angularfire2/database';
import { Chat } from '../pages/chat/chat';
import { SigninPage } from "../pages/sign-in/sign-in";

export const firebaseConfig = {

    apiKey: "AIzaSyCpWKjD7WCIDwkqxeDeWJpZBK3exlECpQM",
    authDomain: "chat-c530c.firebaseapp.com",
    databaseURL: "https://chat-c530c.firebaseio.com",
    projectId: "chat-c530c",
    storageBucket: "chat-c530c.appspot.com",
    messagingSenderId: "327905519530"

}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    Chat
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    Chat
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AutenticacaoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}




