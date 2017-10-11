import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { recipe } from '../classes/recipe';
import { recipeList } from '../data/recipe-list';

@Component({
  selector: 'app-page-recipe-read',
  templateUrl: './page-recipe-read.component.html',
  styleUrls: ['./page-recipe-read.component.scss']
})
export class PageRecipeReadComponent implements OnInit {

  recipe: recipe;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.map(params => {
      let recipeName:string = params['recipeName'];
      this.getRecipe(recipeName);
    }).subscribe();
  }

  getRecipe(name: string) {
    for (let i = 0; i < recipeList.length; i++) {
      if (recipeList[i].name == name) {
        this.recipe = recipeList[i];
      }
    }
  }

}
