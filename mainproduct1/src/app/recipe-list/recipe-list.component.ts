import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { recipe } from '../classes/recipe';
import { recipeList } from '../data/recipe-list';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  RECIPES: recipe[] = [];
  @Input() isSharedRecipe: boolean;
  @Input() recipeType: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getAllRecipes();
  }

  ngOnChanges() {
    this.removeAllRecipes();
    this.filterRecipes();
  }
  
  getAllRecipes() {
    for (let i = 0; i < recipeList.length; i++) {
      if (recipeList[i].sharedRecipe == this.isSharedRecipe) {
        this.RECIPES.push(recipeList[i]);
      }
    }
  }

  filterRecipes() {
    for (let i = 0; i < recipeList.length; i++) {
      if (recipeList[i].sharedRecipe == this.isSharedRecipe) {
         if (recipeList[i].type == this.recipeType) {
          this.RECIPES.push(recipeList[i]);
        } else if (this.recipeType == 'all') {
          this.RECIPES.push(recipeList[i]);
        }
      }
    }
  }

  removeAllRecipes() {
    this.RECIPES.splice(0,this.RECIPES.length);
  }

  readRecipe(name: string){
    this.router.navigate(['/recipe/read', name]);
  }
}
