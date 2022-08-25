import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  getUser(){
    var user:any;
    user = localStorage.getItem('user');
    if(user){
      user = JSON.parse(user);
      return user ;
    }
    return null ;
  }
}
