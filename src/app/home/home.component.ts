import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http/http.service';
import { Product } from '../core/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsArray:Product[] = [] ;
  filteredProducts:Product[] = [] ;
  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(){
    this.httpService.getData('productsitems').subscribe((el:Product[])=>{
      console.log("el",el);

      if(Array.isArray(el) && el.length > 0){
        this.productsArray = el ;
        this.filterProduct('all');
      }
    },
    error=>{
    })
  }

  filterProduct(type:any){
    if(type == 'all'){
      this.filteredProducts = this.productsArray ;
    }else {
      this.filteredProducts = this.productsArray.filter((el:any)=> (el.category == type));
    }
  }

  categoryArr = [
    {'type':'all','category':'Top Offers'},
    {'type':'clothing','category':'Clothing'},
    {'type':'','category':'Top Offers'},
  ]

}
