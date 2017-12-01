import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class Slider {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Slider');
  }
  gotologin(){
    this.navCtrl.setRoot('Login')
  }
  gotosignup(){
    this.navCtrl.push('SignupPage')
  }
}
