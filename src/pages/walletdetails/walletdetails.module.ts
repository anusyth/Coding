import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Walletdetails } from './walletdetails';

@NgModule({
  declarations: [
    Walletdetails,
  ],
  imports: [
    IonicPageModule.forChild(Walletdetails),
  ],
  exports: [
    Walletdetails
  ]
})
export class WalletdetailsModule {}
