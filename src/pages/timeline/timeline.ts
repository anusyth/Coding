import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,ModalController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {


  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }
  postpopover(myEvent) {
    let popover = this.popoverCtrl.create('PostpopoverPage');
    popover.present({
      ev: myEvent
    });
  }
  gotouserlist(){
    this.navCtrl.push('Userlist')
  }
  viewpost(){
    let modal = this.modalCtrl.create('PostviewmodalPage');
    modal.present();
  }
}
