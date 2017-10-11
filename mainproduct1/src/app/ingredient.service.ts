import { Injectable } from '@angular/core';
import { Ingredient } from './classes/ingredient';
import { ingredientLibrary } from './data/ingredient-library';

@Injectable()
export class IngredientService {
    allIngredients: Ingredient[];
    filteredIngredients: Ingredient[];

    constructor() {

    }
}