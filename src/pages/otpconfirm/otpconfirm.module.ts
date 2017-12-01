import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpconfirmPage } from './otpconfirm';

@NgModule({
  declarations: [
    OtpconfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpconfirmPage),
  ],
  exports: [
    OtpconfirmPage
  ]
})
export class OtpconfirmPageModule {}
