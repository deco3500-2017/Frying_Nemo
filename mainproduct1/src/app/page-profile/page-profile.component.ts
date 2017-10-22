import { Component, OnInit } from '@angular/core';
import { user } from '../classes/user';
import { allUsers } from '../data/fake-user';
import { recipeList } from '../data/recipe-list';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss']
})
export class PageProfileComponent implements OnInit {
  sharedRecipe: number = 0;
  privateRecipe: number = 0;
  user: user;
  constructor() {
    this.user = allUsers[0];
    for (let i = 0; i < recipeList.length; i++) {
      if (recipeList[i].sharedRecipe == false){
        this.privateRecipe += 1;
      }
      else {
        if (recipeList[i].createBy == 'Woody Sins') {
          this.sharedRecipe += 1;
        }
      }
    }
  }

  ngOnInit() {
  }

}
