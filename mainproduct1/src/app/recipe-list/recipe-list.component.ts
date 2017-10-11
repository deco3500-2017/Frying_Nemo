import { Component, OnInit, Input } from '@angular/core';
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

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    for (let i = 0; i < recipeList.length; i++) {
      if (recipeList[i].sharedRecipe == this.isSharedRecipe) {
        this.RECIPES.push(recipeList[i]);
      }
    }
  }

  readRecipe(name: string){
    this.router.navigate(['/recipe/read', name]);
  }
}
