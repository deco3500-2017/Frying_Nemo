import { Component, OnInit } from '@angular/core';
import { shoppingList } from '../data/shopping-list';

@Component({
  selector: 'app-page-shopping',
  templateUrl: './page-shopping.component.html',
  styleUrls: ['./page-shopping.component.scss']
})
export class PageShoppingComponent implements OnInit {
  
  myShoppingList: string[];
  constructor() { 
    // this.myShoppingList = shoppingList;
    this.myShoppingList = JSON.parse(localStorage.getItem('shoppingList'));
  }

  ngOnInit() {
  }

}
