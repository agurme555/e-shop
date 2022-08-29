import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Product } from 'src/app/core/models/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedItemSubject=new BehaviorSubject<Product[]>([]);
  selectItems = this.selectedItemSubject.asObservable();
  constructor() { 
    this.getSelectedProducts();
  }

  emitSelectProduct(products:Product[]){
   this.selectedItemSubject.next(products)
  }


  addItemToCart(product:Product){
    this.selectItems.pipe(take(1), map((products)=>{
      products.push(product);
      let prodArr = JSON.stringify(products);
      localStorage.setItem("products",prodArr);
    })).subscribe();
  }

  getSelectedProducts() {
    let productArr: any = [];
    productArr = localStorage.getItem("products");
    // productArr = JSON.parse(productArr);
    if(productArr){
      productArr = JSON.parse(productArr);
      this.emitSelectProduct(productArr);
    }
    // if(productArr)
    // this.selectItems.pipe(take(1), map((products) => {
    //   products=[];
    //   products.push(productArr);
    // })).subscribe();
  }
}
