import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


//Layouts
import {DefaultLayoutComponent} from './layouts/default/default.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {AdditionNavbarComponent} from './layouts/addition-navbar/addition-navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';


import {
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule
} from "@angular/material";

import {ChartsModule}                     from 'ng2-charts';
import {CalendarModule}                   from 'angular-calendar';
import {NgxDatatableModule}               from '@swimlane/ngx-datatable';
import {AgmCoreModule}                    from '@agm/core';
import {SqueezeBoxModule}                 from 'squeezebox';


//components
import {AlertComponent} from "./components/alert/alert.component";
import {BadgeComponent} from './components/badge/badge.component';
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {CardComponent} from "./components/card/card.component";
import {FileComponent} from "./components/file/file.component";
import {NIHTimelineComponent} from "./components/ni-h-timeline/ni-h-timeline.component";


//pages
import {AdminDashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {LogoComponent} from "./components/logo/logo.component";
import {CurrentOrderTableComponent} from './components/order/current-order-table/current-order-table.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DailyTaskRecordComponent} from './components/task-record/daily-task-record/daily-task-record.component';
import {DailyTaskRecordTableComponent} from './components/task-record/daily-task-record-table/daily-task-record-table.component';
import {SalesBarChartComponent} from './components/charts/sales-bar-chart/sales-bar-chart.component';
import {HttpModule} from "@angular/http";
import { CreateOrderComponent } from './components/order/create-order/create-order.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MdAutocompleteModule,
        MdButtonModule,
        MdButtonToggleModule,
        MdCardModule,
        MdCheckboxModule,
        MdChipsModule,
        MdCoreModule,
        MdDatepickerModule,
        MdDialogModule,
        MdExpansionModule,
        MdGridListModule,
        MdIconModule,
        MdInputModule,
        MdListModule,
        MdMenuModule,
        MdNativeDateModule,
        MdPaginatorModule,
        MdProgressBarModule,
        MdProgressSpinnerModule,
        MdRadioModule,
        MdRippleModule,
        MdSelectModule,
        MdSidenavModule,
        MdSliderModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdSortModule,
        MdTableModule,
        MdTabsModule,
        MdToolbarModule,
        MdTooltipModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ChartsModule,
        CalendarModule.forRoot(),
        NgxDatatableModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
        }),
        SqueezeBoxModule,
        HttpModule
    ],
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
        MainMenuComponent,
        CurrentOrderTableComponent,
        DailyTaskRecordComponent,
        DailyTaskRecordTableComponent,
        SalesBarChartComponent,
        CreateOrderComponent,
    ],
    providers: [],
    entryComponents: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
