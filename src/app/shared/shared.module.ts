import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginModule } from '../login/login.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LoginModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
