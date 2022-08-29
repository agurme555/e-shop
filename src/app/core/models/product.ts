export interface Product{
    "id":number,
    "title":string,
    "price":number,
    "description":string,
    "category":string,
    "image":string,
    "ratings":Ratings
}

export interface Ratings{
    "rate":number,
    "count":number
}

export class Address{
    line1:string = "";
    line2:string = "" ;
    city:string="";
    state:string="";
    zipcode:number=0;
}


export class Order{
  name:string="";
  mobileNuber:number=0;
  products:Product[]=[];
  address:Address=new Address();
  deliveryDate:any;
  finalPrice:number = 0 ;
  discount:number = 0;
  todalPrice:number = 0 ;
  emailId:string = "";  
}