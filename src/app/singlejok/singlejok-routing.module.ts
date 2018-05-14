import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'auth', loadChildren:'./auth/auth.module#AuthModule'},
  {path:'member', loadChildren:'./member/member.module#MemberModule'},
  //{path:'member', compon}
  {path:'', component:MainComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglejokRoutingModule { }
