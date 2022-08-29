import { Component, OnInit } from '@angular/core';
import { Order } from '../core/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  orderDetailsObject:Order=new Order();
  constructor() { }

  ngOnInit(): void {
    debugger
    this.getProductDetails();
    this.getAddressDetails();
    this.calculateFinalPrice();
  }

  orderObj = {
    "name":"",
    "address":null,
    "product":[],

  }

  getProductDetails(){
    let productArr:any ;
    productArr = localStorage.getItem("products");
    if(productArr){
      productArr = JSON.parse(productArr);
      this.orderDetailsObject.products = [...productArr];
    }
  }

  getAddressDetails(){
    let userObj:any ;
    userObj = localStorage.getItem("user");
    if(userObj){
      userObj = JSON.parse(userObj);
      this.orderDetailsObject.address = {...userObj.address};
      this.orderDetailsObject.mobileNuber = userObj.mobileNuber;
      this.orderDetailsObject.name = userObj.firstName + " " + userObj.lastName ;
      this.orderDetailsObject.emailId = userObj.emailId;
    }
  }

  calculateFinalPrice(){
    this.orderDetailsObject.todalPrice = 0 ;
    this.orderDetailsObject.products.forEach(el=> {
      this.orderDetailsObject.todalPrice += Number(el.price) ;
    })

    this.orderDetailsObject.finalPrice = (Number(this.orderDetailsObject.todalPrice) - 20);
  }


}
