import {Component, OnInit, Input} from '@angular/core';
import {WeeklyTaskRecord} from "../../../shared/weekly-task-record/weekly-task-record";
import {WeeklyTaskRecordService} from "../../../shared/weekly-task-record/weekly-task-record.service";
import {TaskRecordService} from "../../../shared/task-record/task-record.service";
import {SharedService} from "../../../layouts/shared.service";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-weekly-task-record',
    templateUrl: './weekly-task-record.component.html',
    styleUrls: ['./weekly-task-record.component.scss'],
    providers: [WeeklyTaskRecordService]
})
export class WeeklyTaskRecordComponent implements OnInit {

    @Input() order;
    @Input() weeklyQuantities;
    currentWeekdays: any[];
    weeklyTaskRecords: any[];
    date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');


    constructor(private _taskRecordService: TaskRecordService,
                private _sharedService: SharedService,
                private datePipe: DatePipe) {
    }

    ngOnInit() {
        console.log(this.date);
        this.getCurrentWeekdays(this.date);
        // this.getWeeklyTaskRecords(this.order.id, this.order.is_team_task, this.date);
    }

    getWeeklyTaskRecords(orderId, isTeamTask, date) {
        this._taskRecordService.getWeeklyTaskRecords(orderId, isTeamTask, date)
            .subscribe(
                (weeklyTaskRecords) => this.weeklyTaskRecords = weeklyTaskRecords,
                () => console.log(this.weeklyTaskRecords)
            )
    }

    getCurrentWeekdays(date) {
        this._sharedService.getCurrentWeekdays(date)
            .subscribe(
                (currentWeekdays) => this.currentWeekdays = currentWeekdays
            )
    }


}
