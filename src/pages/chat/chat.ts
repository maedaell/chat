import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {AngularFire, FirebaseListObservable } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AutenticacaoService } from '../../services/autenticacao'

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class Chat {

  lista: FirebaseListObservable<any>;
  mensagem: string;

  // constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFire) {
  //   this.lista=af.database.list("https://chat-c530c.firebaseio.com")
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public af: AngularFireDatabase, public authService: AutenticacaoService) {
    this.lista=af.list("https://chat-c530c.firebaseio.com")
  }

  enviarMsg() {
    let msg = {
      texto: this.authService.get_usuario + this.mensagem,
      data: new Date()
    };
    this.lista.push(msg).then(()=> {
      this.mensagem = "";
      }
    )
  }

}
