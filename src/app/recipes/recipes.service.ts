import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Nasi Goreng',
      imageUrl: 'https://akcdn.detik.net.id/community/media/visual/2020/03/15/9d7f0b87-3f9b-430d-8b75-7b121db0a89a.jpeg?w=700&q=90',
      ingredients: ['Nasi', 'Bawang Putih', 'Kecap', 'Cabai']
    },
    {
      id: 'r2',
      title: 'Gado - gado',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gado-gado_in_Jakarta.JPG/1280px-Gado-gado_in_Jakarta.JPG',
      ingredients: ['Lontong', 'Tempe', 'Tahu', 'Timun']
    }
  ]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id != recipeId;
    });
  }
}
