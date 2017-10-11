import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { recipe } from '../classes/recipe';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipeItem: recipe;
  constructor() { }

  ngOnInit() {
  }


}
