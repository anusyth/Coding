import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ModalController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  changepassword() {
    let prompt = this.alertCtrl.create({
      title: 'Change Passowrd',
      message: "Enter a new strong password to secure your account",
      inputs: [
        {
          name: 'old password',
          placeholder: 'Old Password'
        },
        {
          name: 'new password',
          placeholder: 'New Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  loggeduser() {
    let modal = this.modalCtrl.create('AccountloggedinPage');
    modal.present();
  }

}
