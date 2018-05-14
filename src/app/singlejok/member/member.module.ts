import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { InfoComponent } from './info/info.component';
import { AuthGuard } from '../../guard/auth-guard';
import { AuthService } from '../../guard/auth.service';

@NgModule({
  imports: [
    CommonModule
    ,MemberRoutingModule
  ],
  declarations: [InfoComponent]
})
export class MemberModule { }
