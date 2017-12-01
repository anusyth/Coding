import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-accountloggedin',
  templateUrl: 'accountloggedin.html',
})
export class AccountloggedinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountloggedinPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
