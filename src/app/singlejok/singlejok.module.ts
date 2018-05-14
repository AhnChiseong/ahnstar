import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglejokRoutingModule } from './singlejok-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule
    ,SinglejokRoutingModule
  ],
  declarations: [MainComponent]
})
export class SinglejokModule { }
