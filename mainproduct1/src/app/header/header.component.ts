import { Component, OnInit } from '@angular/core';
import { slideInDownAnimation, fadeInAnimation } from '../animation';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideInDownAnimation, fadeInAnimation]
})
export class HeaderComponent implements OnInit {
  isDropdown: boolean = false;
  menu: boolean = false;
  isModalShown: boolean = false;
  constructor(
    private location: Location
  ) {
   }

  ngOnInit() {
  }
  
  hideModal() {
    this.isModalShown = false;
    this.hideAllModals();
  }
 
  hideAllModals() {
    this.isModalShown = false;
    this.isDropdown = false;
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

  back() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
