import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddfriendsPage } from './addfriends';

@NgModule({
  declarations: [
    AddfriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddfriendsPage),
  ],
  exports: [
    AddfriendsPage
  ]
})
export class AddfriendsPageModule {}
