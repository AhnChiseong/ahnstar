import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';

@NgModule({
  imports: [
    CommonModule
    ,AuthRoutingModule
  ],
  declarations: [LoginComponent, JoinComponent]
})
export class AuthModule { }
