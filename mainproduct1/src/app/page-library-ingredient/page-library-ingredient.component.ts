import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from '../classes/ingredient';
import { ingredientLibrary } from '../data/ingredient-library';

@Component({
  selector: 'app-page-library-ingredient',
  templateUrl: './page-library-ingredient.component.html',
  styleUrls: ['./page-library-ingredient.component.scss']
})
export class PageLibraryIngredientComponent implements OnInit {

  ingredient: Ingredient;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.map(params => {
      let ingredientName: string = params['ingredientName'];
      this.getIngredient(ingredientName);
    }).subscribe();
  }

  getIngredient(name: string) {
    for(let i = 0; i < ingredientLibrary.length; i++){
      if(ingredientLibrary[i].name == name) {
        this.ingredient = ingredientLibrary[i];
      }
    }
  }
}
