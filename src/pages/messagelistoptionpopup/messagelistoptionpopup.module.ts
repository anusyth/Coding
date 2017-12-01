import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagelistoptionpopupPage } from './messagelistoptionpopup';

@NgModule({
  declarations: [
    MessagelistoptionpopupPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagelistoptionpopupPage),
  ],
  exports: [
    MessagelistoptionpopupPage
  ]
})
export class MessagelistoptionpopupPageModule {}
