import { Component, OnInit } from '@angular/core';
import { shoppingList } from '../data/shopping-list';
import { ingredientLibrary } from '../data/ingredient-library';
import { Ingredient } from '../classes/ingredient';

@Component({
  selector: 'app-page-shopping',
  templateUrl: './page-shopping.component.html',
  styleUrls: ['./page-shopping.component.scss']
})
export class PageShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [];
  myShoppingList: string[];
  constructor() {
    // this.myShoppingList = shoppingList;
    this.myShoppingList = JSON.parse(localStorage.getItem('shoppingList'));
    if (this.myShoppingList != null) {
      for (let i = 0; i < this.myShoppingList.length; i++) {
        for (let x = 0; x < ingredientLibrary.length; x++) {
          if (this.myShoppingList[i] == ingredientLibrary[x].name) {
            this.ingredients.push(ingredientLibrary[x])
          }
        }
      }
    }
  }

  ngOnInit() {
    localStorage.removeItem('shoppingList');
  }

}
