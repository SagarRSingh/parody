import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HomepageComponent } from './Homepage/create-homepage-component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path:'admin',component:AdminDashboardComponent},
  {path:'home',component:HomepageComponent},
  { path:'login',component:LoginComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
