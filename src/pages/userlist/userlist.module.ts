import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Userlist } from './userlist';

@NgModule({
  declarations: [
    Userlist,
  ],
  imports: [
    IonicPageModule.forChild(Userlist),
  ],
  exports: [
    Userlist
  ]
})
export class UserlistModule {}
