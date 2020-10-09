import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  
  recipes: Recipe[];
  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.recipes = this.recipesService.getAllRecipes();
  }

  fav(recipe: Recipe, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log(recipe.title, 'added to favourite');
  }

  share(recipe: Recipe, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log('Share', recipe.title, 'to social media');
  }

  onFilterUpdate(event: CustomEvent){
    console.log(event.detail);
  }
}
