import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import {DashboardComponent}from './dashboard/dashboard.component';
import{LoginComponent} from './login/login.component';
import{PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductComponent} from './product/product.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path:'order',component:OrderComponent},
  { path:'product',component:ProductComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}