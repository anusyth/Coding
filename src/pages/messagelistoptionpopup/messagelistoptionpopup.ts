import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-messagelistoptionpopup',
  templateUrl: 'messagelistoptionpopup.html',
})
export class MessagelistoptionpopupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagelistoptionpopupPage');
  }

}
