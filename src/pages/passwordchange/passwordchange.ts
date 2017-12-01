import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-passwordchange',
  templateUrl: 'passwordchange.html',
})
export class PasswordchangePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController,public viewCntrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordchangePage');
  }

  passwordchangetoast(){
    let toast = this.toastCtrl.create({
      message: 'Password changed successfully',
      duration: 4000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      this.navCtrl.push('Login')
    });

    toast.present();
  }
}
