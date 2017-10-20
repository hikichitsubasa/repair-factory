import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Response} from "@angular/http";
import {DatePipe, Location} from "@angular/common";
import {Order} from "../../../shared/order/order";
import {SharedService} from "../../../layouts/shared.service";
import {TaskRecordService} from "../../../shared/task-record/task-record.service";
import {OrderService} from "../../../shared/order/order.service";
import {OvertimeService} from "../../../shared/overtime/overtime.service";
import {DailyReportService} from "../../../shared/daily-report/daily-report.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-page-task-record',
    templateUrl: './page-task-record.component.html',
    styleUrls: ['./page-task-record.component.scss']
})
export class PageTaskRecordComponent implements OnInit {

    pageTitle = '作業実績入力ページ';
    id = this.route.snapshot.params['id'];
    date = this.route.snapshot.params['date'];
    today = new Date();
    order = new Order();
    isTeamTask = {num: 2, bool: true}; //チーム制


    // TaskRecord
    taskRecordsByOrderId: any[];
    taskRecords: any[];
    selectedTaskRecord: any;
    isEditTaskRecord: boolean = false;
    dailyQuantityByOrderId: any[];
    dailyQuantityProp = {dailyQuantity: 0, date: ""};
    dailyQuantity;
    completedQuantity: number = 0;

    // Graph
    taskRecordGraphDataByOrderId: Observable<any[]>;
    public barChartLabels: string[] = [];
    public barChartQuantity: any[] = [];
    public barChartData: any = [];
    public options: any;

    // Overtime
    selectedOvertime;
    isEditOvertime: boolean = false;
    overtimeRecordsByOrderId;
    overtimeSumQuantityByOrderId;
    overtimeSumQuantity: number;
    dailyOvertimeQuantity: number;
    dailyOvertimeSumQuantityByOrderId;


    constructor(private _taskRecordService: TaskRecordService,
                private _orderService: OrderService,
                private _sharedService: SharedService,
                private _overtimeService: OvertimeService,
                private route: ActivatedRoute,
                private location: Location,
                public datepipe: DatePipe) {
        this._sharedService.emitChange(this.pageTitle);
        this.options = {scales: {yAxes:[{ticks: {beginAtZero: true,min: 0}}]}}

    }

    ngOnInit() {
        if (this.date == undefined) {
            this.date = this.today;
        }
        this.getOrder();

        this.getTaskRecordsByOrderId(this.id);
        this.getDailyQuantityByOrderId(this.id);
        this.getOvertimeRecordsByOrderId();
        this.getOvertimeSumQuantityByOrderId();
        this.getDailyOvertimeSumQuantityByOrderId();
    }

    changeDate(date) {
        this.date = this.datepipe.transform(date, 'yyyy-MM-dd');
        this.getDailyQuantityByOrderId(this.id);
        this.getDailyOvertimeSumQuantityByOrderId();
    }


// Order
    getOrder() {
        return this._orderService.getOrder(this.id)
            .subscribe(
                (order) => {
                    this.modifyIsTeamTaskToString(order);
                    this.getTaskRecordGraphDataByOrderId();
                    this.order = order;

                }
            )
    }

    modifyIsTeamTaskToString(order) {
        if (order.is_team_task == 2) {
            order.is_team_task = "チーム制";
            this.isTeamTask.num = 2;
            this.isTeamTask.bool = true;
        } else {
            order.is_team_task = "個人";
            this.isTeamTask.num = 1;
            this.isTeamTask.bool = false;
        }
    }

// Graph
    getTaskRecordGraphDataByOrderId() {
        this._taskRecordService.getTaskRecordGraphDataByOrderId(this.id, this.isTeamTask.num)
            .subscribe(
                (taskRecordGraphDataByOrderId) => {
                    this.setTaskRecordBarChartData(taskRecordGraphDataByOrderId);
                    this.taskRecordGraphDataByOrderId = taskRecordGraphDataByOrderId
                },
                (err) => console.log(err),
            );
    }

    setTaskRecordBarChartData(taskRecordGraphDataByOrderId) {
        this.barChartLabels = [];
        this.barChartQuantity = [];
        this.barChartData = [];
        for (let data of taskRecordGraphDataByOrderId) {
            if (this.isTeamTask.num == 1) {
                this.barChartLabels.push(data.first_name + " " + data.last_name);
            } else {
                this.barChartLabels.push(data.team);
            }
            this.barChartQuantity.push(data.total_quantity);
        }
        this.taskRecordGraphDataByOrderId = taskRecordGraphDataByOrderId;
        this.barChartData = {
            labels: this.barChartLabels,
            datasets: [
                {
                    label: '作業枚数',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: this.barChartQuantity
                }
            ]
        }
    }

// TaskRecord
    getTaskRecordsByOrderId(id) {
        return this._taskRecordService.getTaskRecordsByOrderId(id)
            .subscribe(
                (taskRecordsByOrderId) => this.taskRecordsByOrderId = taskRecordsByOrderId,
                (err: Response) => console.log(err),
                () => this.sumCompletedQuantity(this.taskRecordsByOrderId)
            )
    }

    getDailyQuantityByOrderId(id) {
        this._taskRecordService.getDailyQuantityByOrderId(id)
            .subscribe(
                (dailyQuantityByOrderId) => {
                    this.dailyQuantityByOrderId = dailyQuantityByOrderId;
                    this.filterDailyQuantity(this.date, this.dailyQuantityByOrderId);
                }
            )
    }

    filterDailyQuantity(date, taskRecords) {
        this.dailyQuantity = 0;
        date = this.datepipe.transform(date, 'yyyy-MM-dd');
        if (taskRecords == undefined || taskRecords == null) {
            return this.dailyQuantity = 0;
        }
        for (let taskRecord of taskRecords) {
            if (taskRecord.date == date) {
                this.dailyQuantityProp = taskRecord;
                this.dailyQuantity = this.dailyQuantityProp.dailyQuantity;
                this.dailyQuantity = parseInt(this.dailyQuantity);
                return this.dailyQuantity;
            }
        }
        return this.dailyQuantity = 0;
    }

    sumCompletedQuantity(taskRecords) {
        this.completedQuantity = 0;
        if (taskRecords !== undefined || taskRecords !== null || taskRecords.length !== 0) {
            for (let taskRecord of taskRecords) {
                this.completedQuantity += taskRecord.quantity;
            }
            return this.completedQuantity;
        }

    }

    createTaskRecord(taskRecord) {
        this._taskRecordService.createTaskRecord(taskRecord)
            .catch(err => console.log(err))
            .then(status => this.ngOnInit())

    }

    selectTaskRecord(taskRecord) {
        this.selectedTaskRecord = taskRecord;
        this.isEditTaskRecord = true;
    }

    deleteTaskRecord(taskRecord) {
        if (confirm('削除してよろしいですか？')) {
            this._taskRecordService.deleteTaskRecord(taskRecord.id)
                .then(status => this.ngOnInit())

        }
    }

    updateTaskRecord(taskRecord) {
        taskRecord.date = this.datepipe.transform(taskRecord.date, 'yyyy-MM-dd');
        this._taskRecordService.updateTaskRecord(taskRecord)
            .then(() => this.cancelEditTaskRecord())
            .then(status => this.ngOnInit())

    }

    cancelEditTaskRecord() {
        this.isEditTaskRecord = false;
        this.getTaskRecordsByOrderId(this.id);
    }


// Overtime
    createOvertime(overtime) {
        this._overtimeService.createOvertime(overtime)
            .then(status => this.ngOnInit())

    }

    selectOvertime(overtime) {
        this.selectedOvertime = overtime;
        this.isEditOvertime = true;
    }

    deleteOvertime(overtime) {
        if (confirm('削除してよろしいですか？')) {
            this._overtimeService.deleteOvertime(overtime.overtime_record_id)
                .then(status => this.ngOnInit())
        }
    }

    updateOvertime(overtime) {
        overtime.date = this.datepipe.transform(overtime.date, 'yyyy-MM-dd');
        this._overtimeService.updateOvertime(overtime)
            .then(() => this.cancelEditOvertime())
            .then(status => this.ngOnInit())

    }

    cancelEditOvertime() {
        this.isEditOvertime = false;
        this.getOvertimeRecordsByOrderId();
    }

    getOvertimeRecordsByOrderId() {
        this._overtimeService.getOvertimeRecordsByOrderId(this.id)
            .subscribe(
                (overtimeRecordsByOrderId) => this.overtimeRecordsByOrderId = overtimeRecordsByOrderId
            )
    }

    getOvertimeSumQuantityByOrderId() {
        this._overtimeService.getOvertimeSumQuantityByOrderId(this.id)
            .subscribe(
                (overtimeSumQuantityByOrderId) => {
                    this.overtimeSumQuantityByOrderId = overtimeSumQuantityByOrderId;
                    this.strToNumOvertimeSumQuantityByOrderId(this.overtimeSumQuantityByOrderId);
                },
                (err) => console.log(err)
            )

    }

    strToNumOvertimeSumQuantityByOrderId(overtimeSumQuantityByOrderId) {
        this.overtimeSumQuantity = 0;
        if (overtimeSumQuantityByOrderId == undefined || overtimeSumQuantityByOrderId == null) {
            return this.overtimeSumQuantity = 0
        }
        return this.overtimeSumQuantity = parseInt(overtimeSumQuantityByOrderId.overtime_sum_quantity);

    }

    getDailyOvertimeSumQuantityByOrderId() {
        this._overtimeService.getDailyOvertimeSumQuantityByOrderId(this.id)
            .subscribe(
                (dailyOvertimeSumQuantityByOrderId) => {
                    this.dailyOvertimeSumQuantityByOrderId = dailyOvertimeSumQuantityByOrderId;
                    this.filterDailyOvertimeQuantity(this.date, this.dailyOvertimeSumQuantityByOrderId);
                }
            )
    }

    filterDailyOvertimeQuantity(date, overtimeRecords) {
        this.dailyOvertimeQuantity = 0;
        date = this.datepipe.transform(date, 'yyyy-MM-dd');
        if (overtimeRecords == undefined ||
            overtimeRecords == null ||
            overtimeRecords.length == 0) {
            return this.dailyOvertimeQuantity = 0;
        } else {
            for (let dailyOvertimeRecord of overtimeRecords) {
                if (dailyOvertimeRecord.overtime_date == date) {
                    this.dailyOvertimeQuantity = parseInt(dailyOvertimeRecord.dailyOvertimeQuantity);
                    return this.dailyOvertimeQuantity;
                }
            }
        }
        return this.dailyOvertimeQuantity = 0;
    }


// Others
    goBack(): void {
        this.location.back();
    }

}
