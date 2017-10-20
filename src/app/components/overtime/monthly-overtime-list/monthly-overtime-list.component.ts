import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {OvertimeService} from "../../../shared/overtime/overtime.service";

@Component({
    selector: 'app-monthly-overtime-list',
    templateUrl: './monthly-overtime-list.component.html',
    styleUrls: ['./monthly-overtime-list.component.scss']
})
export class MonthlyOvertimeListComponent implements OnInit {

    date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    monthlyOvertimeRecordsGroupByWorkerId: any[];

    constructor(private _overtimeService: OvertimeService,
                private datepipe: DatePipe) {
    }

    ngOnInit() {
        this.getMonthlyOvertimeRecordsGroupByWorkerId();
    }

    changeDate(month) {
        this.date = this.datepipe.transform(month, 'yyyy-MM-dd');
        this.getMonthlyOvertimeRecordsGroupByWorkerId();

    }

    getMonthlyOvertimeRecordsGroupByWorkerId() {
        this._overtimeService.getMonthlyOvertimeRecordsGroupByWorkerId(this.date)
            .subscribe(
                (monthlyOvertimeRecordsGroupByWorkerId) => {
                    this.monthlyOvertimeRecordsGroupByWorkerId = monthlyOvertimeRecordsGroupByWorkerId;
                }
            )

    }
}
