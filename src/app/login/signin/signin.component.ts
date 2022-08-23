import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/http/http.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm!:FormGroup
  constructor(private fb:FormBuilder,private login:LoginService) { }

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
   if(this.signInForm.valid){
    this.login.authLogin(this.signInForm.value).subscribe(el => {
     alert("login Response   " + el);
    },
    error=> {

    })
   }
  }


}
