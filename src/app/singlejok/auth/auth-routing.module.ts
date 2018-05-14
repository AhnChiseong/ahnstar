import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'join', component:JoinComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
