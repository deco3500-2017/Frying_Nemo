import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { recipe } from '../classes/recipe';
import { recipeList } from '../data/recipe-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-recipe-create',
  templateUrl: './page-recipe-create.component.html',
  styleUrls: ['./page-recipe-create.component.scss']
})
export class PageRecipeCreateComponent implements OnInit {
  recipe: recipe;
  recipeForm: FormGroup;
  name: string;
  description: string;
  instructions: string[];
  ingredients: string[];
  constructor(
    private _fb: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.recipeForm = this._fb.group({
      recipeName: ['', [Validators.required, Validators.minLength(3)]],
      recipeDescription: ['', [Validators.required, Validators.minLength(5)]],
      recipeInstructions: this._fb.array([
        this.initInstruction(),
      ]),
    })
  }

  initInstruction() {
    return this._fb.group({
      instruction: ['', [Validators.required,, Validators.minLength(3)]]
    })
  }

  addInstruction() {
    // add address to the list
    const control = <FormArray>this.recipeForm.controls['recipeInstructions'];
    control.push(this.initInstruction());
  }

  removeInstruction(index: number) {
    // remove address from the list
    const control = <FormArray>this.recipeForm.controls['recipeInstructions'];
    control.removeAt(index);
  }

  onSubmitForm(recipeForm) {
    this.name = this.recipeForm.get('recipeName').value;
    this.description = this.recipeForm.get('recipeDescription').value;
    this.instructions = this.recipeForm.get('recipeInstructions').value;
    this.recipe = {
      name: this.name,
      instruction: this.instructions,
      description: this.description,
      sharedRecipe: false,
      ingredients: [''],
      imgURL: ''
    }
    recipeList.push(this.recipe);
    console.log(recipeList);
    this.router.navigate(['/recipe/private']);
  }

}
