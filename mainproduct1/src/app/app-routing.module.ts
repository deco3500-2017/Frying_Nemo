import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRecipeComponent } from './page-recipe/page-recipe.component';
import { PageRecipeMainComponent } from './page-recipe-main/page-recipe-main.component';
import { PageRecipeCreateComponent } from './page-recipe-create/page-recipe-create.component';
import { PageRecipeSharedComponent } from './page-recipe-shared/page-recipe-shared.component';
import { PageRecipePrivateComponent } from './page-recipe-private/page-recipe-private.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageLunchComponent } from './page-lunch/page-lunch.component';
import { PageLibraryComponent } from './page-library/page-library.component';
import { PageLibraryTypeComponent } from './page-library-type/page-library-type.component';
import { PageLibraryMainComponent } from './page-library-main/page-library-main.component';
import { PageLibraryIngredientComponent } from './page-library-ingredient/page-library-ingredient.component';
import { PageRecipeReadComponent } from './page-recipe-read/page-recipe-read.component';
import { PageShoppingComponent } from './page-shopping/page-shopping.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PageLoginComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'lunch', component: PageLunchComponent },
  { path: 'shoppinglist', component: PageShoppingComponent },
  {
    path: 'library', component: PageLibraryComponent,
    children: [
      { path: '', redirectTo: '/library/main', pathMatch: 'full' },
      {path: 'main', component: PageLibraryMainComponent},
      {path: 'type/:ingredientType', component: PageLibraryTypeComponent},
      {path: 'ingredient/:ingredientName', component: PageLibraryIngredientComponent},
    ]
  },
  { path: 'profile', component: PageProfileComponent },
  {
    path: 'recipe', component: PageRecipeComponent,
    children: [
      { path: '', redirectTo: '/recipe/main', pathMatch: 'full' },
      { path: 'main', component: PageRecipeMainComponent },
      { path: 'shared', component: PageRecipeSharedComponent },
      { path: 'private', component: PageRecipePrivateComponent },
      { path: 'read/:recipeName', component: PageRecipeReadComponent },
      { path: 'create', component: PageRecipeCreateComponent }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



