import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    username: string;
    password: string;

  constructor( public navCtrl: NavController) {}

    login() {
    }

    register() {
      this.navCtrl.navigateRoot('register');
    }
}
