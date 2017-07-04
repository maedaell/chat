import { Component } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Chat } from "../pages/chat/chat";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Chat;
  isAuthenticated: boolean;

  constructor(platform: Platform, private menuCtrl: MenuController, statusBar: StatusBar, splashScreen: SplashScreen,
      private autenticacaoService: AutenticacaoService) {
    firebase.initializeApp({
      apiKey: "AIzaSyCpWKjD7WCIDwkqxeDeWJpZBK3exlECpQM",
      authDomain: "chat-c530c.firebaseapp.com",
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated=true;
        this.nav.setRoot(this.tabsPage);
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
