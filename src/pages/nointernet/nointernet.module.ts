import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NointernetPage } from './nointernet';

@NgModule({
  declarations: [
    NointernetPage,
  ],
  imports: [
    IonicPageModule.forChild(NointernetPage),
  ],
  exports: [
    NointernetPage
  ]
})
export class NointernetPageModule {}
