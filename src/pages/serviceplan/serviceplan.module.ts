import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceplanPage } from './serviceplan';

@NgModule({
  declarations: [
    ServiceplanPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceplanPage),
  ],
  exports: [
    ServiceplanPage
  ]
})
export class ServiceplanPageModule {}
