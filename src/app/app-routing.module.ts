import {NgModule}                     from '@angular/core';
import {RouterModule, Routes}         from '@angular/router';

import {DefaultLayoutComponent} from './layouts/default/default.component';
import {AdminDashboardComponent} from "./pages/admin/dashboard/dashboard.component";
import {Page404Component} from "./pages/page-404/page-404.component";
import {WeeklyTaskRecordComponent} from "./components/task-record/weekly-task-record/weekly-task-record.component";

import {ClientComponent} from "./components/client/client/client.component";
import {ContentComponent} from "./components/content/content/content.component";
import {OrderComponent} from "./components/order/order/order.component";
import {OrderNewComponent} from "./components/order/order-new/order-new.component";
import {PageOrderListComponent} from "./pages/order/page-order-list/page-order-list.component";
import {PageOrderEditComponent} from "./pages/order/page-order-edit/page-order-edit.component";
import {PageWorkerListComponent} from "./pages/worker/page-worker-list/page-worker-list.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {PageTaskRecordComponent} from "./pages/task-record/page-task-record/page-task-record.component";
import {SettingComponent} from "./pages/admin/setting/setting.component";

const defaultRoutes: Routes = [
  {path: '', redirectTo: 'admin/dashboard', pathMatch: 'full'},
  {path: 'admin/dashboard', component: AdminDashboardComponent},
  {path: 'admin/order-list', component: PageOrderListComponent},
  {path: 'admin/order-edit/:id', component: PageOrderEditComponent},
  {path: 'admin/order-new', component: OrderNewComponent},
  {path: 'admin/worker-list', component: PageWorkerListComponent},
  {path: 'admin/task-record/:id', component: PageTaskRecordComponent},
  {path: 'admin/client', component: ClientComponent},
  {path: 'admin/content', component: ContentComponent},
  {path: 'admin/weekly-task-record', component: WeeklyTaskRecordComponent},
  {path: 'admin/setting', component: SettingComponent},


  {path: 'dashboard', component: DashboardComponent},
  {path: 'task-record-new/:id', component: PageTaskRecordComponent},
  {path: 'admin/order', component: OrderComponent},
  {path: '**', component: Page404Component}

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
