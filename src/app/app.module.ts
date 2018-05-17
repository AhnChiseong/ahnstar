import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, appRoutingProvisers } from './app-routing.module';
import { Error404Component } from './exception/error404/error404.component';
import { Error500Component } from './exception/error500/error500.component';
import { ErrorOtherComponent } from './exception/error-other/error-other.component';
import { GlobalComponent } from './global/global.component';
import { AuthGuard } from './guard/auth-guard';
import { AuthService } from './guard/auth.service';


@NgModule({
  declarations: [
    AppComponent
    ,GlobalComponent, Error404Component, Error500Component, ErrorOtherComponent, GlobalComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
  ],
  providers: [
    appRoutingProvisers, AuthGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
