import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { AutenticacaoService } from "../../services/autenticacao";


@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SigninPage {

  constructor(private autenticacaoService: AutenticacaoService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {}

  signin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Fazendo o login'
    });
    loading.present();
    this.autenticacaoService.signin(form.value.email, form.value.senha)
      .then(data => {
        loading.dismiss();
        })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Falha no login',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

}
