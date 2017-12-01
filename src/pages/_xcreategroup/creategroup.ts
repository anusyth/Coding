import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-creategroup',
  templateUrl: 'creategroup.html',
})
export class CreategroupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedContacts = [];
    this.contactList = [{
      id: 1,
      name: "Sante Piazza"
    },
      {
        id: 2,
        name: "Mark Capon"
      },
      {
        id: 3,
        name: "Elia Lorenzo"
      },
      {
        id: 4,
        name: "Achille Lori"
      },
      {
        id: 5,
        name: "Mark"
      },
      {
        id: 6,
        name: "Carmen Lori"
      },
      {
        id: 7,
        name: "Carmen Lori"
      },
      {
        id: 8,
        name: "Celso Lucchesi"
      },
      {
        id: 9,
        name: "Diego Onio"
      },
      {
        id: 10,
        name: "Igino Giordano"

      },
      {
        id: 11,
        name: "Carmen Lori"
      },
      {
        id: 12,
        name: "Igino Giordano"
      },
    ];
  }


  contactList: any[];

  selectedContacts: any[];


  tapedAvatar(id: number) {

    console.log(this.selectedContacts);
    if (this.isInArray(id)) {
      let index = this.selectedContacts.indexOf(id);

      this.selectedContacts.splice(index, 1);
    } else {
      this.selectedContacts.push(id);
      console.log(this.selectedContacts.indexOf(id));
    }
  }

  isInArray(id: number): boolean {
    let check: boolean = false;
    for (let contactId of this.selectedContacts) {
      if (contactId == id) {
        check = true;
      }
    }
    return check;
  }

  delete(chip: Element) {
    chip.remove();
  }

  gotogroupnameadd() {
    this.navCtrl.push('GroupnameaddPage')
  }
}
