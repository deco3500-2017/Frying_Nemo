import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
// import { IngredientService } from '../ingredient.service';
import 'rxjs/add/operator/map';
import { Ingredient } from '../classes/ingredient';
import { ingredientLibrary } from '../data/ingredient-library';

@Component({
  selector: 'app-page-library-type',
  templateUrl: './page-library-type.component.html',
  styleUrls: ['./page-library-type.component.scss']
})
export class PageLibraryTypeComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private ingredientService: IngredientService
  ) { }

  ngOnInit() {
    this.route.params.map(params => {
      let ingredientType: string = params['ingredientType'];
      this.getAllIngredients(ingredientType);
    }).subscribe();
  }
  
  getAllIngredients(type: string){
     for(let i = 0; i < ingredientLibrary.length; i++){
       if(ingredientLibrary[i].type == type) {
         this.ingredients.push(ingredientLibrary[i]);
       }
     }
  }

  goToIngredient(name: string) {
    this.router.navigate(['/library/ingredient', name]);
  }
}
