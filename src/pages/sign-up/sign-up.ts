import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { AutenticacaoService } from "../../services/autenticacao";

/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignupPage {

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  constructor(private autenticacaoService: AutenticacaoService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signup(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Fazendo o registro da aplicação'
    });
    loading.present();
    this.autenticacaoService.signup(form.value.email, form.value.senha)
      .then(data => {
        loading.dismiss();
        })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Falha no registro',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

}
