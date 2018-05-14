import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './global/global.component';
import { Error404Component } from './exception/error404/error404.component';

const baseRoutes: Routes = [
  {path:'', component:GlobalComponent},
  {path:'**', component:Error404Component}
]

const appRoutes: Routes = [
    {path:'singlejok', loadChildren:'./singlejok/singlejok.module#SinglejokModule'},
    ...baseRoutes
]

export const appRoutingProvisers: any[] = [
  //  {provide: LocationStrategy, useClass: HashLocationStrategy}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);