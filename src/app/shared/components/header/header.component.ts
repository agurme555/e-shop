import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 actionType:string = 'SignIn';
 isUserLoggedIn:boolean = false  ;
 user:any;
 selectedItems:Observable<Product[]> | null = null;
 @ViewChild('buttonClose') closeButton: any ;
  constructor(private authSvc:AuthenticationService,private router:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.getUserDetails();

   this.selectedItems = this.cart.selectItems;

  //  this.getSelectedProducts();
   
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
