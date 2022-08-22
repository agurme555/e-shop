import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passWordMisMatch } from 'src/app/shared/validator/custom.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!:FormGroup;

  @Input()
  actionName:string = '';

  // set actionName()

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createFormStructure();
  }

  ngAfterViewInit(){
    console.log('actionName', this.actionName);
  }


  createFormStructure(){
    this.signUpForm  = this.fb.group({
      "firstName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("^[a-zA-z]+$")]],
      "lastName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("^[a-zA-z]+$")]],
      "mobileNumber":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "dateofBirth":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "emailId":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "password":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "confirmPassword":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "isFormAccept":[false,[Validators.required]],
      "address":this.fb.group({
        "line1":['',[Validators.required]],
        "line2":['',[]],
        "city":['',[]],
        "state":['',[]],
        "zipCode":['',[Validators.required]]
      })
    },{validator:passWordMisMatch})
  }

  onFormSubmit(){

    console.log("formValue", this.signUpForm)
  }

  showPage = {
    "firstName":"",
    "LastName":"",
    "mobileNumber":null,
    "dateOfBirth":"",
    "emailId":"",
    "password":"",
    "confirmPassword":"",
    "address":{
      "line1":"",
      "line2":"",
      "city":"",
      "stage":"",
      "zipCode":null
    }
  }

  get LastName(){
    return this.signUpForm.get('lastName');
  }
  get FirstName(){
    return this.signUpForm.get('firstName');
  }


}
