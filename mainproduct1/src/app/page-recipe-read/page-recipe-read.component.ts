import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { recipe } from '../classes/recipe';
import { recipeList } from '../data/recipe-list';
import { Ingredient } from '../classes/ingredient';
import { ingredientLibrary } from '../data/ingredient-library';

@Component({
  selector: 'app-page-recipe-read',
  templateUrl: './page-recipe-read.component.html',
  styleUrls: ['./page-recipe-read.component.scss']
})
export class PageRecipeReadComponent implements OnInit {
  carbohydrates: number = 0;
  protein: number = 0;
  sodium: number = 0;
  cholesterol: number = 0;
  fat: number = 0;
  ingredients: string[] = [];
  ingredientList: Ingredient[] = [];
  recipe: recipe;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.map(params => {
      let recipeName:string = params['recipeName'];
      this.getRecipe(recipeName);
    }).subscribe();
    this.ingredients = this.recipe.ingredients;
    for (let i = 0; i < this.ingredients.length; i++) {
      // console.log(this.recipeIngredient[i])
      for (let a = 0; a < ingredientLibrary.length; a++) {
        // console.log(ingredientLibrary[a].name)
        if (this.ingredients[i].toLowerCase() == ingredientLibrary[a].name.toLowerCase()) {
          this.ingredientList.push(ingredientLibrary[a]);
        }
      }
    }
    // console.log(this.Ingredients)
    for(let x = 0; x < this.ingredientList.length; x++) {
      this.carbohydrates += this.ingredientList[x].carbohydrates;
      this.protein += this.ingredientList[x].protein;
      this.sodium += this.ingredientList[x].sodium;
      this.cholesterol += this.ingredientList[x].cholesterol;
      this.fat  += this.ingredientList[x].fat;
    }
  }

  getRecipe(name: string) {
    for (let i = 0; i < recipeList.length; i++) {
      if (recipeList[i].name == name) {
        this.recipe = recipeList[i];
      }
    }
  }

  shareRecipe() {
    this.recipe.sharedRecipe = true;
  }

}
