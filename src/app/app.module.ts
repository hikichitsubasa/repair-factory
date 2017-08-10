import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {DefaultLayoutComponent} from './layouts/default/default.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {AdditionNavbarComponent} from './layouts/addition-navbar/addition-navbar.component';

import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './layouts/footer/footer.component';
import {BadgeComponent} from './components/badge/badge.component';
import {AlertComponent} from "./components/alert/alert.component";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {FileComponent} from "./components/file/file.component";
import {NIHTimelineComponent} from "./components/ni-h-timeline/ni-h-timeline.component";
import {CardComponent} from "./components/card/card.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdIconModule} from "@angular/material";
import { AdminDashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import {LogoComponent} from "./components/logo/logo.component";


@NgModule({
  declarations: [
    AppComponent,

    DefaultLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    AdditionNavbarComponent,
    FooterComponent,
    LogoComponent,

    AlertComponent,
    BadgeComponent,
    BreadcrumbComponent,
    CardComponent,
    FileComponent,
    NIHTimelineComponent,
    AdminDashboardComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
