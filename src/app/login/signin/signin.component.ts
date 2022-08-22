import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm!:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.signInForm = this.fb.group({
      "email":['',[Validators.required]],
      "password":['',[Validators.required]]
    })

  }

  signIn(){

  }


}
