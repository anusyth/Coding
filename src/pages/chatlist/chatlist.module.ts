import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chatlist } from './chatlist';

@NgModule({
  declarations: [
    Chatlist,
  ],
  imports: [
    IonicPageModule.forChild(Chatlist),
  ],
  exports: [
    Chatlist
  ]
})
export class ChatlistModule {}
