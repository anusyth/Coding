import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreategroupPage } from './creategroup';

@NgModule({
  declarations: [
    CreategroupPage,
  ],
  imports: [
    IonicPageModule.forChild(CreategroupPage),
  ],
  exports: [
    CreategroupPage
  ]
})
export class CreategroupPageModule {}
