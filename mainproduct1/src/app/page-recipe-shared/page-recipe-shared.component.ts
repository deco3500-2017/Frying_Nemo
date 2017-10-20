import { Component, OnInit } from '@angular/core';
import { dishType } from '../data/dish-type';
import { recipeList } from '../data/recipe-list';
import { recipe } from '../classes/recipe';

@Component({
  selector: 'app-page-recipe-shared',
  templateUrl: './page-recipe-shared.component.html',
  styleUrls: ['./page-recipe-shared.component.scss']
})
export class PageRecipeSharedComponent implements OnInit {
  recipes: recipe[] = [];
  dishType: string[] = [];
  recipeType: string;
  isRecipeShared: boolean = true;
  constructor() {
    for(let i = 0; i < recipeList.length; i++) {
      if (recipeList[i].sharedRecipe == this.isRecipeShared) {
          this.recipes.push(recipeList[i]);
      }
    }
    for(let x = 0; x < this.recipes.length; x++) {
      if(dishType.includes(this.recipes[x].type)) {
        this.dishType.push(this.recipes[x].type);
      }
    }  
    
   }

  ngOnInit() {
  }

  onSelect(type){
    this.recipeType = type;
  }

}
