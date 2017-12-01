import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupnameaddPage } from './groupnameadd';

@NgModule({
  declarations: [
    GroupnameaddPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupnameaddPage),
  ],
  exports: [
    GroupnameaddPage
  ]
})
export class GroupnameaddPageModule {}
