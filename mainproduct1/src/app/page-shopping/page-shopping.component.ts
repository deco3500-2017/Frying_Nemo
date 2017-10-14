import { Component, OnInit } from '@angular/core';
import { shoppingList } from '../data/shopping-list';
import { ShoppingList } from '../classes/shoppinglist';

@Component({
  selector: 'app-page-shopping',
  templateUrl: './page-shopping.component.html',
  styleUrls: ['./page-shopping.component.scss']
})
export class PageShoppingComponent implements OnInit {
  
  myShoppingList: ShoppingList;
  constructor() { 
    this.myShoppingList = shoppingList[0];
  }

  ngOnInit() {
  }

}
