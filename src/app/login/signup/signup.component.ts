import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { passWordMisMatch } from 'src/app/shared/validator/custom.validator';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!:FormGroup;
  user:any;
  @Input()
  actionName:string = '';

  @Output()
  signUpCompleted:EventEmitter<boolean>=new EventEmitter(false);

  // set actionName()

  constructor(private fb:FormBuilder,private login:LoginService,private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.createFormStructure();
    this.user = this.auth.getUser();
    if(this.user != null){
      this.signUpForm.patchValue(this.user);
    }

  }

  ngAfterViewInit(){
    console.log('actionName', this.actionName);
  }


  createFormStructure(){
    this.signUpForm  = this.fb.group({
      "firstName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("^[a-zA-z]+$")]],
      "lastName":['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[a-zA-z]+$")]],
      "mobileNumber":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "dateofBirth":['',[]],
      "emailId":['',[Validators.required,Validators.minLength(2)]],
      "password":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "confirmPassword":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "isFormAccept":[false,[Validators.required]],
      "address":this.fb.group({
        "line1":['',[]],
        "line2":['',[]],
        "city":['',[]],
        "state":['',[]],
        "zipCode":['',[]]
      })
    },{validator:passWordMisMatch})
  }

  onFormSubmit(){
    if(this.signUpForm.valid){
      this.login.registerUser(this.signUpForm.value).subscribe(el=>{
        console.log('response', el);
        this.signUpCompleted.emit(true);
      })
    }
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
