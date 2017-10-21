import { Component, OnInit } from '@angular/core';
import { recipeList } from '../data/recipe-list';
import { recipe } from '../classes/recipe';
import { Router } from '@angular/router';
import { Ingredient } from '../classes/ingredient';
import { ingredientLibrary } from '../data/ingredient-library';
import { lunchBoxLibrary } from '../data/lunchbox-library';
import { shoppingList } from '../data/shopping-list';


@Component({
  selector: 'app-page-lunch',
  templateUrl: './page-lunch.component.html',
  styleUrls: ['./page-lunch.component.scss']
})
export class PageLunchComponent implements OnInit {
  // This is for the lunchbox
  isLunchBoxEmpty: boolean = true;
  recipe: recipe;

  // This is for the nutritions 
  carbohydrates: number = 0;
  protein: number = 0;
  sodium: number = 0;
  cholesterol: number = 0;
  fat: number = 0;
  Ingredients: Ingredient[] = [];
  recipeIngredient: string[];
  constructor(
    private router: Router,
  ) {
    if(lunchBoxLibrary.length > 0) {
      this.isLunchBoxEmpty = false;
      this.retrieveRecipe();
    } else {
      this.isLunchBoxEmpty = true;
    }
    
  }

  ngOnInit() {
    // localStorage.removeItem('shoppingList');
  }
  
  retrieveRecipe() {
    // this.recipe = lunchBoxLibrary[0];
    this.recipe = JSON.parse(localStorage.getItem('lunchBox'));
    this.recipeIngredient = this.recipe.ingredients;
    for (let i = 0; i < this.recipeIngredient.length; i++) {
      // console.log(this.recipeIngredient[i])
      for (let a = 0; a < ingredientLibrary.length; a++) {
        // console.log(ingredientLibrary[a].name)
        if (this.recipeIngredient[i].toLowerCase() == ingredientLibrary[a].name.toLowerCase()) {
          this.Ingredients.push(ingredientLibrary[a]);
          shoppingList.push(ingredientLibrary[a].name);
          localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        }
      }
    }
    // console.log(this.Ingredients)
    for(let x = 0; x < this.Ingredients.length; x++) {
      this.carbohydrates += this.Ingredients[x].carbohydrates;
      this.protein += this.Ingredients[x].protein;
      this.sodium += this.Ingredients[x].sodium;
      this.cholesterol += this.Ingredients[x].cholesterol;
      this.fat  += this.Ingredients[x].fat;
    }
  }

  goToIngredient(name: string){
    this.router.navigate(['/library/ingredient', name]);
  }
}
