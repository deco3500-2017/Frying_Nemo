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
  recipeCount: number = 0;
  @Input() isSharedRecipe: boolean;
  @Input() recipeType: string = 'all';
  @Input() publicStatus: string = 'public';

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    // this.getAllRecipes();
  }

  ngOnChanges() {
    this.filterRecipes();
  }

  getAllRecipes() {
    for (let i = 0; i < recipeList.length; i++) {
      if (recipeList[i].sharedRecipe == this.isSharedRecipe) {
        this.RECIPES.push(recipeList[i]);
      }
    }
    this.recipeCount = this.RECIPES.length;
  }

  filterRecipes() {
    for (let i = 0; i < recipeList.length; i++) {
      if (recipeList[i].sharedRecipe == this.isSharedRecipe) {
        // breaking 
        if (recipeList[i].type == this.recipeType) {
          this.removeAllRecipes();
          console.log(`1a ${this.recipeType}`);
          console.log(`1a ${this.publicStatus}`);
          if (recipeList[i].createBy == this.publicStatus) {
            console.log(`1a ${this.publicStatus}`);
            this.RECIPES.push(recipeList[i]);
          } else if (this.publicStatus == 'public') {
            console.log(`1b ${this.publicStatus}`);
            this.RECIPES.push(recipeList[i]);
          } else if (this.publicStatus == undefined) {
            console.log(`1c ${this.publicStatus}`);
            this.RECIPES.push(recipeList[i]);
          }
          // breaking 
        } else if (this.recipeType == 'all') {
          if (recipeList[i].createBy == this.publicStatus) {
            this.removeAllRecipes();
            console.log(`2a ${this.publicStatus}`);
            this.RECIPES.push(recipeList[i]);
          } else if (this.publicStatus == 'public') {
            console.log(`2b ${this.publicStatus}`);
            if (this.RECIPES.length != 0 ) {
              console.log(`2b1 ${this.publicStatus}`);
              let y = this.RECIPES.indexOf(recipeList[i]);
              if (y == -1){
                this.RECIPES.push(recipeList[i]);
              }
            } else {
              this.removeAllRecipes();
              console.log(`2b2 ${this.publicStatus}`);
              this.RECIPES.push(recipeList[i]);
            }
          } else if (this.publicStatus == undefined) {
            // this.removeAllRecipes();
            console.log(`2c ${this.publicStatus}`);
            this.RECIPES.push(recipeList[i]);
          }
          // breaking 
        } else if (recipeList[i].createBy == this.publicStatus) {
          this.removeAllRecipes();
          console.log(`3 ${this.recipeType}`);
          console.log(`3 ${this.publicStatus}`);
          if (recipeList[i].type == this.recipeType) {
            console.log(`3a ${this.recipeType}`);
            this.RECIPES.push(recipeList[i]);
          } else if (this.recipeType == 'all') {
            console.log(`3b ${this.recipeType}`);
            this.RECIPES.push(recipeList[i]);
          } else if (this.recipeType == undefined) {
            console.log(`3c ${this.recipeType}`);
            this.RECIPES.push(recipeList[i]);
          }
          // breaking 
        } else if (this.publicStatus == 'public') {
          console.log(`4 ${this.recipeType}`);
          console.log(`4 ${this.publicStatus}`);
          if (recipeList[i].type == this.recipeType) {
            // this.removeAllRecipes();
            console.log(`4a ${this.recipeType}`);
            this.RECIPES.push(recipeList[i]);
          } else if (this.recipeType == 'all') {
            console.log(`4b ${this.recipeType}`);
            this.RECIPES.push(recipeList[i]);
          } else if (this.recipeType == undefined) {
            console.log(`4c ${this.recipeType}`);
            this.RECIPES.push(recipeList[i]);
          }
        }
      }
    }
  }

  removeAllRecipes() {
    this.RECIPES.splice(0, this.RECIPES.length);
  }

  readRecipe(name: string) {
    this.router.navigate(['/recipe/read', name]);
  }
}
