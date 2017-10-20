import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {DatePipe} from "@angular/common";
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import 'hammerjs';
import {HttpModule} from "@angular/http";

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
// import {CalendarModule}                   from 'angular-calendar';
import {
    NG_TABLE_DIRECTIVES,
    Ng2TableModule
} from "ng2-table/ng2-table";
import {NgxDatatableModule}               from '@swimlane/ngx-datatable';
import {AgmCoreModule}                    from '@agm/core';
import {SqueezeBoxModule}                 from 'squeezebox';

//Ngx
import {ModalModule} from "ngx-bootstrap";

//PrimengNG
import {DataTableModule} from "primeng/components/datatable/datatable";
import {DialogModule} from "primeng/components/dialog/dialog";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {GrowlModule} from "primeng/components/growl/growl";
import {ProgressBarModule} from "primeng/components/progressbar/progressbar";
import {SharedModule} from "primeng/components/common/shared";
import {CalendarModule} from "primeng/primeng";
import {ChartModule} from "primeng/primeng";

//components
import {AlertComponent} from "./components/alert/alert.component";
import {BadgeComponent} from './components/badge/badge.component';
import {CardComponent} from "./components/card/card.component";
import {FileComponent} from "./components/file/file.component";
import {NIHTimelineComponent} from "./components/ni-h-timeline/ni-h-timeline.component";
import {CreateOrderComponent} from './components/order/create-order/create-order.component';
import {OrderListComponent} from './components/order/order-list/order-list.component';
import {CurrentOrderTableComponent} from './components/order/current-order-table/current-order-table.component';
import {DailyTaskRecordTableComponent} from './components/task-record/daily-task-record-table/daily-task-record-table.component';
import {SalesBarChartComponent} from './components/charts/sales-bar-chart/sales-bar-chart.component';

//pages
import {AdminDashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {Page404Component} from "./pages/page-404/page-404.component";
import {PageConfirmComponent} from "./pages/confirm/confirm.component";
import {PageForgotComponent} from "./pages/forgot/forgot.component";
import {Page500Component} from "./pages/page-500/page-500.component";
import {PageSignIn1Component} from "./pages/sign-in-1/sign-in-1.component";
import {PageSignIn3Component} from "./pages/sign-in-3/sign-in-3.component";
import {PageSignUp1Component} from "./pages/sign-up-1/sign-up-1.component";


//Layouts
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {LogoComponent} from "./components/logo/logo.component";
import {DefaultLayoutComponent} from './layouts/default/default.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {AdditionNavbarComponent} from './layouts/addition-navbar/addition-navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';


import {Ng2SmartTableModule} from "ng2-smart-table";


import {DialogComponent} from './components/dialog/dialog/dialog.component';


import {WeeklyTaskRecordComponent} from './components/task-record/weekly-task-record/weekly-task-record.component';

import {ClientComponent} from './components/client/client/client.component';
import {ClientDetailComponent} from './components/client/client-detail/client-detail.component';
import {ClientListComponent} from './components/client/client-list/client-list.component';
import {ClientNewComponent} from './components/client/client-new/client-new.component';
import {ClientEditComponent} from './components/client/client-edit/client-edit.component';


//Service
import {ClientService} from "./shared/client/client.service";
import {ContentService} from "./shared/content/content.service";
import {DailyReportService} from "./shared/daily-report/daily-report.service";
import {OrderService} from "./shared/order/order.service";
import {TaskRecordService} from "./shared/task-record/task-record.service";
import {TeamService} from "./shared/team/team.service";
import {TimeTableService} from "./shared/time-table/time-table.service";
import {WorkerService} from "./shared/worker/worker.service";

import {ContentComponent} from './components/content/content/content.component';
import {ContentDetailComponent} from './components/content/content-detail/content-detail.component';
import {ContentEditComponent} from './components/content/content-edit/content-edit.component';
import {ContentListComponent} from './components/content/content-list/content-list.component';
import {ContentNewComponent} from './components/content/content-new/content-new.component';
import {OrderComponent} from './components/order/order/order.component';
import {OrderNewComponent} from './components/order/order-new/order-new.component';
import {OrderDetailComponent} from './components/order/order-detail/order-detail.component';
import {OrderEditComponent} from './components/order/order-edit/order-edit.component';
import {TaskRecordComponent} from './components/task-record/task-record/task-record.component';
import {TaskRecordNewComponent} from './components/task-record/task-record-new/task-record-new.component';
import {TaskRecordDetailComponent} from './components/task-record/task-record-detail/task-record-detail.component';
import {TaskRecordEditComponent} from './components/task-record/task-record-edit/task-record-edit.component';
import {TaskRecordListComponent} from './components/task-record/task-record-list/task-record-list.component';
import {PageOrderListComponent} from "./pages/order/page-order-list/page-order-list.component";
import {PageOrderEditComponent} from './pages/order/page-order-edit/page-order-edit.component';
import {WorkerNewComponent} from './components/worker/worker-new/worker-new.component';
import {WorkerDetailComponent} from './components/worker/worker-detail/worker-detail.component';
import {WorkerEditComponent} from './components/worker/worker-edit/worker-edit.component';
import {WorkerListComponent} from './components/worker/worker-list/worker-list.component';
import {WorkerComponent} from './components/worker/worker/worker.component';
import {PageWorkerListComponent} from './pages/worker/page-worker-list/page-worker-list.component';
import {PageWorkerNewComponent} from './pages/worker/page-worker-new/page-worker-new.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {CurrentOrderTablesComponent} from './components/order/current-order-tables/current-order-tables.component';
import {PageTaskRecordComponent} from './pages/task-record/page-task-record/page-task-record.component';
import {PageTaskRecordNewComponent} from './pages/task-record/page-task-record-new/page-task-record-new.component';
import {TaskRecordListByOrderIdComponent} from './components/task-record/task-record-list-by-order-id/task-record-list-by-order-id.component';
import {OrderDetailTableComponent} from './components/order/order-detail-table/order-detail-table.component';
import {DailyTargetProgressComponent} from './components/task-record/daily-target-progress/daily-target-progress.component';
import {ProgressComponent} from './components/task-record/progress/progress.component';
import {TaskRecordOvertimeNewComponent} from './components/task-record/task-record-overtime-new/task-record-overtime-new.component';
import {OvertimeService} from "./shared/overtime/overtime.service";
import {OvertimeListComponent} from './components/task-record/overtime-list/overtime-list.component';
import {OvertimeEditComponent} from './components/task-record/overtime-edit/overtime-edit.component';
import {TaskRecordGraphByOrderIdComponent} from './components/task-record/task-record-graph-by-order-id/task-record-graph-by-order-id.component';
import {DailyReportButtonComponent} from './components/daily-report/daily-report-button/daily-report-button.component';
import {MonthlyOvertimeListComponent} from './components/overtime/monthly-overtime-list/monthly-overtime-list.component';
import {SettingComponent} from './pages/admin/setting/setting.component';



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
        CalendarModule,

        //NGX
        NgxDatatableModule,
        ModalModule.forRoot(),

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
        }),
        SqueezeBoxModule,
        HttpModule,
        Ng2TableModule,
        Ng2SmartTableModule,

        // PrimeNG
        DataTableModule,
        DialogModule,
        DropdownModule,
        GrowlModule,
        ProgressBarModule,
        SharedModule,
        ChartModule
    ],
    declarations: [
        AppComponent,

        //Layouts
        DefaultLayoutComponent,
        NavbarComponent,
        SidebarComponent,
        AdditionNavbarComponent,
        FooterComponent,
        LogoComponent,

        //Pages
        AdminDashboardComponent,
        Page404Component,
        PageConfirmComponent,
        PageForgotComponent,
        Page500Component,
        PageSignIn1Component,
        PageSignIn3Component,
        PageSignUp1Component,

        //Components
        AlertComponent,
        BadgeComponent,
        CardComponent,
        FileComponent,
        NIHTimelineComponent,
        MainMenuComponent,
        DailyTaskRecordTableComponent,
        SalesBarChartComponent,
        CreateOrderComponent,
        CurrentOrderTableComponent,
        OrderListComponent,
        DialogComponent,
        WeeklyTaskRecordComponent,
        ClientComponent,
        ClientDetailComponent,
        ClientListComponent,
        ClientNewComponent,
        ClientEditComponent,
        ContentComponent,
        ContentDetailComponent,
        ContentEditComponent,
        ContentListComponent,
        ContentNewComponent,
        OrderComponent,
        OrderNewComponent,
        OrderDetailComponent,
        OrderEditComponent,
        TaskRecordComponent,
        TaskRecordNewComponent,
        TaskRecordDetailComponent,
        TaskRecordEditComponent,
        TaskRecordListComponent,
        PageOrderListComponent,
        PageOrderEditComponent,
        WorkerNewComponent,
        WorkerDetailComponent,
        WorkerEditComponent,
        WorkerListComponent,
        WorkerComponent,
        PageWorkerListComponent,
        PageWorkerNewComponent,
        DashboardComponent,
        CurrentOrderTablesComponent,
        PageTaskRecordComponent,
        PageTaskRecordNewComponent,
        TaskRecordListByOrderIdComponent,
        OrderDetailTableComponent,
        DailyTargetProgressComponent,
        ProgressComponent,
        TaskRecordOvertimeNewComponent,
        OvertimeListComponent,
        OvertimeEditComponent,
        TaskRecordGraphByOrderIdComponent,
        DailyReportButtonComponent,
        MonthlyOvertimeListComponent,
        SettingComponent,
    ],
    exports: [
        NG_TABLE_DIRECTIVES
    ],

    providers: [
        ClientService,
        ContentService,
        DailyReportService,
        OrderService,
        OvertimeService,
        TaskRecordService,
        TeamService,
        TimeTableService,
        WorkerService,
        DatePipe
    ],
    entryComponents: [DialogComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
