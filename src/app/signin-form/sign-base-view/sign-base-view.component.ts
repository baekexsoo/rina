import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-base-view',
  templateUrl: './sign-base-view.component.html',
  styleUrls: ['./sign-base-view.component.css']
})
export class SignBaseViewComponent implements OnInit {

  type: string;
  title: string;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.getPath();
  }

  /* Method to retrieve quickly the path to show the correct form
*/

  getPath(){
   const path = this.location.prepareExternalUrl(this.location.path()).slice(1);
    if(path === '/signup'){
      this.title = 'INSCRIPTION';
      this.type = 'signup';
    }
    else if(path === '/signin'){
      this.title = 'CONNEXION';
      this.type = 'signin';
    }
    }

}
