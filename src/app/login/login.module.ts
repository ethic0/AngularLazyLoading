import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
