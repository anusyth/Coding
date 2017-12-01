import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-addfriends',
  templateUrl: 'addfriends.html',
})
export class AddfriendsPage {
  friends: string = "add";


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddfriendsPage');
  }

  gotouserprofile() {
    this.navCtrl.push('UserprofilePage')
  }

  deleterequest() {
    let prompt = this.alertCtrl.create({
      title: 'Delete Request',
      message: "Are you sure to delete this request?",
      buttons: [
        {
          text: 'Confirm',
          handler: data => {
            console.log('Confirm clicked');
          }
        },
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  gotosearch(){
    this.navCtrl.push('SearchPage')
  }
}
