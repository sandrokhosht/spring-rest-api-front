import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
   {path:"",component:NavbarComponent},
   {path:"register",component:RegistrationComponent},
   {path:"search",component:SearchDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
