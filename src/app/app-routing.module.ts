import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './gaurds/auth.guard';


const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import ('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import ('./dashboard/dashboard.module').then(m=>m.DashboardModule),
    canActivateChild:[AuthGuard]
  },
  {
    path:'profile',
    loadChildren: () => import ('./profile/profile.module').then(m=>m.ProfileModule),
    canActivateChild: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
