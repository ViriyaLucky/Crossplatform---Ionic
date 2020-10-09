import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  loadedPlace: Place;
  urlDefault:String = '';
  caption:String ="";
  constructor(
    private placesService: PlacesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
   
    
    this.activatedRoute.paramMap.subscribe( paramMap => {

      if(!paramMap.has('placeId')) {return;}
      const placeId = paramMap.get('placeId');
      this.loadedPlace = this.placesService.getPlace(placeId);
       //router.url === '/places/tabs/discover/'+loadedPlace.id
      if(this.router.url.indexOf("discover") !== -1){
        this.urlDefault = '/places/tabs/discover/';
        this.caption = "book";
      }else{
        //router.url === '/places/tabs/offers/'+loadedPlace.id
        this.urlDefault = '/places/tabs/offers/';
        this.caption = "edit";
      }
    })
  }

  
}
