import {NgModule}                     from '@angular/core';
import {RouterModule, Routes}         from '@angular/router';

import {DefaultLayoutComponent} from './layouts/default/default.component';
import {AdminDashboardComponent} from "./pages/admin/dashboard/dashboard.component";

const defaultRoutes: Routes = [
  {path: 'admin/dashboard', component: AdminDashboardComponent}
];

const routes: Routes = [
  {
    path: '',
    component:DefaultLayoutComponent,
    children: defaultRoutes,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
