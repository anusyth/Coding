import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams,ActionSheetController} from 'ionic-angular';
import {Camera} from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
  providers : [Camera]
})
export class EditprofilePage {

  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,private camera: Camera ){
    this.base64Image = "assets/img/avatar.png";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  ionViewWillEnter() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'none';
      });
    } // end if
  }

  ionViewDidLeave() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'flex';
      });
    } // end if
  }

  changeprofilepic() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Method',
      buttons: [
        {
          text: 'Camera',
          role: 'camera',
          handler: () => {
            this.camera.getPicture({
              destinationType: this.camera.DestinationType.DATA_URL,
              quality: 100,
              targetWidth: 2000,
              targetHeight: 2000,
              allowEdit: true,
              correctOrientation: true,
            }).then((imageData) => {
              // imageData is a base64 encoded string
              this.base64Image = "data:image/jpeg;base64," + imageData;
            }, (err) => {
              console.log(err);
            });
          }
        },{
          text: 'Gallery',
          role: 'gallery',
          handler: () => {
            this.camera.getPicture({
              destinationType: this.camera.DestinationType.DATA_URL,
              quality: 100,
              targetWidth: 2000,
              targetHeight: 2000,
              allowEdit: true,
              correctOrientation: true,
              sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
            }).then((imageData) => {
              // imageData is a base64 encoded string
              this.base64Image = "data:image/jpeg;base64," + imageData;
            }, (err) => {
              console.log(err);
            });
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  back(){
    this.navCtrl.pop()
  }
}
