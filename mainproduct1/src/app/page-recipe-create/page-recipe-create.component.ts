import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { recipe } from '../classes/recipe';
import { recipeList } from '../data/recipe-list';
import { Router } from '@angular/router';
import { ingredientLibrary } from '../data/ingredient-library';
import { Ingredient } from '../classes/ingredient';

@Component({
  selector: 'app-page-recipe-create',
  templateUrl: './page-recipe-create.component.html',
  styleUrls: ['./page-recipe-create.component.scss']
})
export class PageRecipeCreateComponent implements OnInit {
  recipe: recipe;
  // Ingredients 
  meats: Ingredient[] = [];
  seafoods: Ingredient[] = [];
  vegetables: Ingredient[] = [];
  fruits: Ingredient[] = [];
  meatType: boolean = false;
  seafoodType: boolean = false;
  vegetableType: boolean = false;
  fruitType: boolean = false;

  // For the form
  recipeForm: FormGroup;
  name: string;
  description: string;
  instructions: string[];
  ingredients: string[];
  ingredientFormArray;
  instructionArrays;
  insturctionList: string[] = [];
  constructor(
    private _fb: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
    for(let i = 0; i < ingredientLibrary.length; i++){
      if (ingredientLibrary[i].type == 'meat') {
        this.meats.push(ingredientLibrary[i])
      } else if (ingredientLibrary[i].type == 'seafood') {
        this.seafoods.push(ingredientLibrary[i])
      } else if (ingredientLibrary[i].type == 'vegetable') {
        this.vegetables.push(ingredientLibrary[i])
      } else if (ingredientLibrary[i].type == 'fruit') {
        this.fruits.push(ingredientLibrary[i])
      }
    }
  }

  show(type: string){
    if(type == 'meat') {
      this.meatType = this.meatType ? false : true;
      this.seafoodType = false;
      this.vegetableType = false;
      this.fruitType = false;
    } else if(type == 'seafood') {
      this.meatType = false;
      this.seafoodType = this.seafoodType ? false : true;
      this.vegetableType = false;
      this.fruitType = false;
    } else if(type == 'vegetable') {
      this.meatType = false;
      this.seafoodType = false;
      this.vegetableType = this.vegetableType ? false : true;
      this.fruitType = false;
    } else if(type == 'fruit') {
      this.meatType = false;
      this.seafoodType = false;
      this.vegetableType = false;
      this.fruitType = this.fruitType ? false : true;
    }
  }

  buildForm() {
    this.recipeForm = this._fb.group({
      recipeName: ['', [Validators.required, Validators.minLength(3)]],
      recipeDescription: ['', [Validators.required, Validators.minLength(5)]],
      recipeInstructions: this._fb.array([
        this.initInstruction(),
      ]),
      // recipeInstructions: [[], [Validators.required]],
      recipeIngredient: this._fb.array([])
    })
  }

  // this is for the ingredients checkbox
  onChange(ingredient:string, isChecked: boolean){
    this.ingredientFormArray = <FormArray>this.recipeForm.controls.recipeIngredient;
    
    if(isChecked){
      this.ingredientFormArray.push(new FormControl(ingredient));
    } else {
      let index = this.ingredientFormArray.controls.findIndex(x => x.value == ingredient)
      this.ingredientFormArray.removeAt(index);
    }
    console.log(this.ingredientFormArray.value)
  }

  initInstruction() {
    return this._fb.group({
      instruction: ['', [Validators.required, Validators.minLength(3)]]
    })
  }


  addInstruction() {
    // add address to the list
    this.instructionArrays = <FormArray>this.recipeForm.controls['recipeInstructions'];
    this.instructionArrays.push(this.initInstruction());
  }

  onSubmitForm(recipeForm) {
    for (let i = 0; i < this.instructionArrays.value.length; i++){
      this.insturctionList.push(this.instructionArrays.value[i].instruction)
    }
    this.name = this.recipeForm.get('recipeName').value;
    this.description = this.recipeForm.get('recipeDescription').value;
    this.instructions = this.insturctionList;
    this.ingredients = this.ingredientFormArray.value;
    this.recipe = {
      name: this.name,
      instruction: this.instructions,
      description: this.description,
      sharedRecipe: false,
      ingredients: this.ingredients,
      imgURL: './assets/images/box.png'
    }
    recipeList.push(this.recipe);
    console.log(recipeList);
    this.router.navigate(['/recipe/private']);
  }

}

