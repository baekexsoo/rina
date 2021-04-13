import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'app/models/user.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  
})
export class SignupFormComponent implements OnInit {

  errorMsg: string;
   
  signUpform: FormGroup;
  
  @Input() user: User;
  constructor() { 
     this.user = new User('', '', '', '');
  }

  ngOnInit(): void {
  }
  onSubmitSignupForm(){

  }

}

