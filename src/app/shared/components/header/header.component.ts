import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 actionType:string = 'SignIn';
 isUserLoggedIn:boolean = false  ;
 user:any;
 @ViewChild('buttonClose') closeButton: any ;
  constructor(private authSvc:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  handleAction(){
    this.actionType = 'SignUp'
  }

  signUpHandler(event:boolean){
    if(event){
      this.actionType = 'SignIn';
    }
  }

  getUserDetails(){
    let responseObj = this.authSvc.getUser();
    if(responseObj != null){
      this.isUserLoggedIn = true ;
      this.user = responseObj
    }
  }

  signInHandler(event:boolean){
    if(event){
      this.closeButton.nativeElement.click();
      this.getUserDetails();
    }
  }

  logout(){
    localStorage.removeItem('user');
    this.isUserLoggedIn = false;
    this.router.navigate(['/product'])
   // location.reload();
  }
}
