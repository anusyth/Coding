import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-signupotp',
  templateUrl: 'signupotp.html',
})
export class SignupotpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupotpPage');
  }
  gototab(){
    this.navCtrl.setRoot(TabsPage)
  }

}
