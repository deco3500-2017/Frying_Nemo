import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-recipe-shared',
  templateUrl: './page-recipe-shared.component.html',
  styleUrls: ['./page-recipe-shared.component.scss']
})
export class PageRecipeSharedComponent implements OnInit {
  options: string[] = [
    'vegan', 'lactose-free'
  ]
  recipeType: string;
  constructor() { }

  ngOnInit() {
  }

  onSelect(type){
    this.recipeType = type;
    console.log(this.recipeType)
  }

}
