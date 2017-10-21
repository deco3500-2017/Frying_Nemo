import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageLoginComponent } from './page-login/page-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageRecipeComponent } from './page-recipe/page-recipe.component';
import { PageRecipeMainComponent } from './page-recipe-main/page-recipe-main.component';
import { PageRecipeCreateComponent } from './page-recipe-create/page-recipe-create.component';
import { PageRecipePrivateComponent } from './page-recipe-private/page-recipe-private.component';
import { PageRecipeSharedComponent } from './page-recipe-shared/page-recipe-shared.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageLunchComponent } from './page-lunch/page-lunch.component';
import { PageLibraryComponent } from './page-library/page-library.component';
import { PageLibraryTypeComponent } from './page-library-type/page-library-type.component';
import { PageLibraryMainComponent } from './page-library-main/page-library-main.component';
import { RecipeService } from './recipe.service';
import { IngredientService } from './ingredient.service';
import { PageLibraryIngredientComponent } from './page-library-ingredient/page-library-ingredient.component';
import { PageRecipeReadComponent } from './page-recipe-read/page-recipe-read.component';
import { PageShoppingComponent } from './page-shopping/page-shopping.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    HeaderComponent,
    FooterComponent,
    PageRecipeComponent,
    PageRecipeMainComponent,
    PageRecipeCreateComponent,
    PageRecipePrivateComponent,
    PageRecipeSharedComponent,
    RecipeComponent,
    RecipeListComponent,
    PageProfileComponent,
    PageHomeComponent,
    PageLunchComponent,
    PageLibraryComponent,
    PageLibraryTypeComponent,
    PageLibraryMainComponent,
    PageLibraryIngredientComponent,
    PageRecipeReadComponent,
    PageShoppingComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    D3Service,
    RecipeService,
    IngredientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
