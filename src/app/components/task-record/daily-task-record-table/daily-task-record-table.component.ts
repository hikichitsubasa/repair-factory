import {Component, OnInit, Input} from '@angular/core';
import {TaskRecord} from "../../../shared/task-record/task-record";
import {TaskRecordService} from "../../../shared/task-record/task-record.service";
import {Response} from "@angular/http";
import {DatePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
    selector: 'daily-task-record-table',
    templateUrl: './daily-task-record-table.component.html',
    styleUrls: ['./daily-task-record-table.component.scss'],
    providers: [TaskRecordService]
})


export class DailyTaskRecordTableComponent implements OnInit {
    dailyTaskRecords: TaskRecord[];
    selectedTaskRecord: any[];
    date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

    constructor(private _taskRecordService: TaskRecordService,
                public datePipe: DatePipe,
                private router: Router) {
    }

    ngOnInit() {
        this.getDailyTaskRecords(this.date);
    }

    getDailyTaskRecords(date) {
        this._taskRecordService.getDailyTaskRecords(date)
            .subscribe(
                (dailyTaskRecords) => this.dailyTaskRecords = dailyTaskRecords,
                (err: Response) => console.log(err)
            )
    }

    changeDate(date) {
        this.date = this.datePipe.transform(date, 'yyyy-MM-dd');
        this.getDailyTaskRecords(this.date);
    }

    goToTaskRecord(event) {
        this.router.navigate(['/admin/task-record/' + event.data.id, {date: this.date}]);
    }

}
