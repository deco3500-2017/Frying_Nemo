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
    // console.log(this.Ingredients)
    for(let x = 0; x < this.Ingredients.length; x++) {
      this.carbohydrates += this.Ingredients[x].carbohydrates;
      this.protein += this.Ingredients[x].protein;
      this.sodium += this.Ingredients[x].sodium;
      this.cholesterol += this.Ingredients[x].cholesterol;
      this.fat  += this.Ingredients[x].fat;
    }
  }

  ngOnInit() {
  }
  
  goToIngredient(name: string){
    this.router.navigate(['/library/ingredient', name]);
  }
}
