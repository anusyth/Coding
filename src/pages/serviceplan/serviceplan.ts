import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-serviceplan',
  templateUrl: 'serviceplan.html',
})
export class ServiceplanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceplanPage');
  }

  gotoconfirmorder() {
    this.navCtrl.push('ConfirmorderPage')
  }
}
