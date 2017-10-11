import { Component, OnInit } from '@angular/core';
import { user } from '../classes/user';
import { allUsers } from '../data/fake-user';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.scss']
})
export class PageProfileComponent implements OnInit {
  user: user;
  constructor() {
    this.user = allUsers[0]
   }

  ngOnInit() {
  }

}
