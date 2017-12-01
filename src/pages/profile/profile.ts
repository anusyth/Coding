import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile: string = "about";

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  postpopover(myEvent) {
    let popover = this.popoverCtrl.create('PostpopoverPage');
    popover.present({
      ev: myEvent
    });
  }
  profileedit(){
    this.navCtrl.push('EditprofilePage')
  }
}
