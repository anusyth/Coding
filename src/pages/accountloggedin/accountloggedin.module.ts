import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountloggedinPage } from './accountloggedin';

@NgModule({
  declarations: [
    AccountloggedinPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountloggedinPage),
  ],
  exports: [
    AccountloggedinPage
  ]
})
export class AccountloggedinPageModule {}
