import {Component, OnInit, Input} from '@angular/core';
import {DailyReportService} from "../../../shared/daily-report/daily-report.service";
import {DatePipe} from "@angular/common";
import {DailyReport} from "../../../shared/daily-report/daily-report";

@Component({
    selector: 'app-daily-report-button',
    templateUrl: './daily-report-button.component.html',
    styleUrls: ['./daily-report-button.component.scss']
})
export class DailyReportButtonComponent implements OnInit {

    dailyReport: string[];
    isReport: boolean = false;
    @Input() id;
    @Input() order_id:number;

    constructor(private _dailyReportService: DailyReportService,
                public datepipe: DatePipe) {
    }

    ngOnInit() {
        if(this.order_id !== undefined){
            this.id = this.order_id;
        }
        this.getDailyReport();


    }

    getDailyReport() {
        let today: string;
        today = this.datepipe.transform(new Date(), "yyyy-MM-dd");
        this._dailyReportService.getDailyReport(this.id, today)
            .subscribe(
                (dailyReport) => {

                    if(dailyReport == null){
                        return ;
                    }
                    if (dailyReport.is_report == 1) {
                        return this.isReport = true;
                    }
                }
            )
    }


    createDailyReport() {
        if (confirm("業務日報を送信しますか？")) {
            this._dailyReportService.createDailyReport(this.id)
                .subscribe(
                    (dailyReport) => {
                        this.dailyReport = dailyReport;
                        this.isReport = true;
                    }
                )
        }

    }
}
