import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupotpPage } from './signupotp';

@NgModule({
  declarations: [
    SignupotpPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupotpPage),
  ],
  exports: [
    SignupotpPage
  ]
})
export class SignupotpPageModule {}
