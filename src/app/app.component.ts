import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from "angularfire2";
import {AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

import { AutenticacaoService } from '../services/autenticacao'

import { SigninPage } from "../pages/sign-in/sign-in";
import { SignupPage } from "../pages/sign-up/sign-up";
import { HomePage } from '../pages/home/home';
import { Chat } from "../pages/chat/chat";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  // rootPage:any = Chat;
  isAuthenticated: boolean;
  chat = Chat;
  signinPage = SigninPage;
  signupPage = SignupPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, private menuCtrl: MenuController, statusBar: StatusBar, splashScreen: SplashScreen,
      private autenticacaoService: AutenticacaoService) {
    firebase.initializeApp({
      apiKey: "AIzaSyCpWKjD7WCIDwkqxeDeWJpZBK3exlECpQM",
      authDomain: "chat-c530c.firebaseapp.com",
      databaseURL: "https://chat-c530c.firebaseio.com",
      projectId: "chat-c530c",
      storageBucket: "chat-c530c.appspot.com",
      messagingSenderId: "327905519530"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated=true;
        console.log("login sucess " + user.email);
        this.autenticacaoService.usuario = user.email
        this.nav.setRoot(this.chat);
      } else {
        this.isAuthenticated=false;
        this.nav.setRoot(this.signinPage);
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  carrega(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  logout() {
    this.autenticacaoService.logout();
  }

}
