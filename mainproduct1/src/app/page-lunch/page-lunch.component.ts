import { Component, OnInit } from '@angular/core';
import { recipeList } from '../data/recipe-list';
import { recipe } from '../classes/recipe';
import { Router } from '@angular/router';
import { Ingredient } from '../classes/ingredient';
import { ingredientLibrary } from '../data/ingredient-library';

@Component({
  selector: 'app-page-lunch',
  templateUrl: './page-lunch.component.html',
  styleUrls: ['./page-lunch.component.scss']
})
export class PageLunchComponent implements OnInit {
  Ingredients: Ingredient[] = [];
  recipeIngredient: string[];
  constructor(
    private router: Router,
  ) {
    this.recipeIngredient = recipeList[0].ingredients;
    for (let i = 0; i < this.recipeIngredient.length; i++) {
      // console.log(this.recipeIngredient[i])
      for (let a = 0; a < ingredientLibrary.length; a++) {
        // console.log(ingredientLibrary[a].name)
        if (this.recipeIngredient[i].toLowerCase() == ingredientLibrary[a].name.toLowerCase()) {
          this.Ingredients.push(ingredientLibrary[a]);
        }
      }
    }
    console.log(this.Ingredients);
  }

  ngOnInit() {
  }

}
