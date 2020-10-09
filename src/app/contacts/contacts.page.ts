import { Component, OnInit } from '@angular/core';
import { IonItemSliding, LoadingController, ModalController, ToastController } from '@ionic/angular';

import { ModalAddComponent } from './component/modal-add/modal-add.component';

import { ContactsService } from './contacts.service';
import { Contact } from './contact.model';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacs: Contact[];
  constructor(
    private contacsService: ContactsService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.contacs = this.contacsService.getAllContacts();
  }

  async presentModal(){
    const modal = await this.modalCtrl.create({
      component: ModalAddComponent
    });

    modal.onDidDismiss().then(resultData => {
      
    });

    return await modal.present();
  }

  fav(contact: Contact, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log(contact.nama, 'is set as priority contact');
  }

  onFilterChange(event: CustomEvent){
    console.log(event.detail);
  }

}
