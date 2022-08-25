import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';

const routes: Routes = [
  {path:"product",component:HomeComponent},
  {path:"signIn",component:SigninComponent},
  {path:"signUp",component:SignupComponent},
  {path:"",redirectTo:"/product",pathMatch:'full'},
 // {path:"*",}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
