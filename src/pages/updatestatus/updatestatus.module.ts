import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdatestatusPage } from './updatestatus';

@NgModule({
  declarations: [
    UpdatestatusPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdatestatusPage),
  ],
  exports: [
    UpdatestatusPage
  ]
})
export class UpdatestatusPageModule {}
