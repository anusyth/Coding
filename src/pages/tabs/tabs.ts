import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'TimelinePage';
  tab2Root = 'Chatlist';
  tab3Root = 'UpdatestatusPage';
  tab4Root = 'AddfriendsPage';
  tab5Root = 'ProfilePage';

  constructor() {

  }

}
