import { Component } from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    username: string;
    password: string;

  constructor( public navCtrl: NavController,
               public toastController: ToastController
  ) {}

    login() {
      // tslint:disable-next-line:triple-equals
    if (this.password == 'password' && this.username == 'kasun') {
      this.navCtrl.navigateRoot('search');
      this.successToast();
    } else {
      this.failToast();
    }
    }

    register() {
      this.navCtrl.navigateRoot('register');
    }

  async failToast() {
    const toast = await this.toastController.create({
      message: 'Login Failed',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: 'Login Success',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
