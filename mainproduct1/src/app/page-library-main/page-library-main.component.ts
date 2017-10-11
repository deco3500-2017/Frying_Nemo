import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-library-main',
  templateUrl: './page-library-main.component.html',
  styleUrls: ['./page-library-main.component.scss']
})
export class PageLibraryMainComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToIngredientType(type: string) {
    this.router.navigate(['/library/type', type]);
  }

}
