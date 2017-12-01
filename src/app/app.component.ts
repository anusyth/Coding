import {Component, ViewChild} from '@angular/core';
import { Platform,AlertController, } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Slider } from '../pages/slider/slider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Slider;
  @ViewChild('content') nav;

  constructor(private platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen,public alertCtrl: AlertController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.statusBar.backgroundColorByHexString('#512DA8');
  }

  gotosettings() {
    this.nav.push('SettingsPage');
  }
  gotoplan() {
    this.nav.push('ServiceplanPage');
  }
  gotowallet() {
    this.nav.push('WalletPage');
  }
  gotoprofile(){
    this.nav.push('ProfilePage');
  }
  audiocall(){
    this.nav.push('AudiocallPage');
  }
  videocall(){
    this.nav.push('VideocallPage');
  }
  nointernet(){
    this.nav.push('NointernetPage');
  }

}
