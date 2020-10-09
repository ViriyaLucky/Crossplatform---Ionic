import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    {
      id: 'p1',
      title: 'UMN Apartment',
      description: 'Apartment for UMN Students',
      imageUrl: 'https://dailyapartement.com/wp-content/uploads/2019/01/apartemen-harian.jpg',
      price: 2000000
    },
    {
      id: 'p2',
      title: 'Serpong Apartment',
      description: 'Apartment for Serpong People',
      imageUrl: 'https://img.rea-asia.com/rumah123/premium/1920x1080-fit/primary_property/project/1659/1579155810_background_1659.jpg',
      price: 5000000
    },
    {
      id: 'p3',
      title: 'JKT Apartment',
      description: 'Apartment for Jakarta People',
      imageUrl: 'https://f1-styx.imgix.net/dekohouse/property/real-estate/KCSA-TNST/tower/apartemen-the-nest-karang-mulya-tangerang-tower.jpg?auto=format%2Ccompress&dpr=1&fit=crop&q=60&w=1000',
      price: 10000000
    },
  ];
  constructor() { }

  getAllPlaces(){
    return this.places;
  }

  getPlace(placeId: string){
    return this.places.find(place => {
      return place.id === placeId;
    });
  }
}
