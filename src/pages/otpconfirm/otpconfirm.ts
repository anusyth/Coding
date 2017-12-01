import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-otpconfirm',
  templateUrl: 'otpconfirm.html',
})
export class OtpconfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpconfirmPage');
  }

  gotopasswordchange() {
    this.navCtrl.push('PasswordchangePage')
  }
}
