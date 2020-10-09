import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacs: Contact[] =[
    {
      id: 'c1',
      nama: 'John Thor',
      imageUrl: 'https://pbs.twimg.com/profile_images/2698144802/49de9f8fc3785039fcbded2b832838c6_400x400.jpeg',
      telepon: ['081122334455', '081234567890'],
      email: ['john.thor@umn.ac.id', 'hello@johnthor.com']
    },
    {
      id: 'c2',
      nama: 'John Wick',
      imageUrl: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1558492620/intro-1558094607_wzm0fh.jpg',
      telepon: ['081122334455', '081234567890'],
      email: ['john.wick@umn.ac.id', 'john.wick@gmail.com']
    }
  ]

  constructor() { }

  getAllContacts(){
    return [...this.contacs];
  }

  getContact(contactId: string){
    return {...this.contacs.find(contact => {
      return contact.id === contactId;
    })};
  }

  deleteContact(contactId: string){
    this.contacs = this.contacs.filter(contact => {
      return contact.id !== contactId
    });
  }
  
}
