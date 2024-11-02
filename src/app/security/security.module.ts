import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormRegisterComponent } from './form-register/form-register.component';

@NgModule({
  declarations: [
    LoginComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormRegisterComponent,
    LoginComponent
  ]
})
export class SecurityModule { }