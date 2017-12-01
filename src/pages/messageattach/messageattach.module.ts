import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Messageattach } from './messageattach';

@NgModule({
  declarations: [
    Messageattach,
  ],
  imports: [
    IonicPageModule.forChild(Messageattach),
  ],
  exports: [
    Messageattach
  ]
})
export class MessageattachModule {}
