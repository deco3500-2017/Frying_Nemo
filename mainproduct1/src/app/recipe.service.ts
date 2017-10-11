import { Injectable } from '@angular/core';
import { recipeList } from './data/recipe-list';
import { recipe } from './classes/recipe';

@Injectable()
export class RecipeService {

    getAllRecipe(): Promise<recipe[]> {
        return Promise.resolve(recipeList);
    }

}