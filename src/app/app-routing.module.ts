import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NearbyshopsComponent } from './nearbyshops/nearbyshops.component';
import { PreferredshopsComponent } from './preferredshops/preferredshops.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path : '' , component: LoginComponent},
  {path : 'shops' , component: NearbyshopsComponent},
  {path : 'preferredshops' , component: PreferredshopsComponent},
  {path : 'login' , component: LoginComponent},
  {path : '**' , component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
