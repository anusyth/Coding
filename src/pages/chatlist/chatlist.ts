import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-chatlist',
  templateUrl: 'chatlist.html',
})
export class Chatlist {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl:PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chatlist');
  }
  gotochat(){
    this.navCtrl.push('ChatPage');
  }
  messageuseroption(myEvent){
    let popover = this.popoverCtrl.create('MessagelistoptionpopupPage');
    popover.present({
      ev:myEvent
    })
  }
  gotosearch(){
    this.navCtrl.push('SearchPage')
  }
  creategroup(){
    this.navCtrl.push('CreategroupPage')
  }
}
