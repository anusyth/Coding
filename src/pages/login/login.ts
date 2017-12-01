import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  gototimeline(){
    this.navCtrl.setRoot(TabsPage)
  }
  gotoforgotpassword(){
    this.navCtrl.push('ForgotpasswordPage')
  }
  gotosignup(){
    this.navCtrl.push('SignupPage')
  }
}
