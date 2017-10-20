import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormControl} from '@angular/forms';
import {WorkerService} from "../../../shared/worker/worker.service";
import {TeamService} from "../../../shared/team/team.service";
import {Team} from "../../../shared/team/team";
import {TimeTable} from "../../../shared/time-table/time-table";
import {Order} from "../../../shared/order/order";
import {TimeTableService} from "../../../shared/time-table/time-table.service";
import {TaskRecordService} from "../../../shared/task-record/task-record.service";
import {DatePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {TaskRecord} from "../../../shared/task-record/task-record";
import {Response} from "@angular/http";
import {OrderService} from "../../../shared/order/order.service";

@Component({
    selector: 'app-task-record-new',
    templateUrl: './task-record-new.component.html',
    styleUrls: ['./task-record-new.component.scss']
})
export class TaskRecordNewComponent implements OnInit {

    id = this.route.snapshot.params['id'];
    today = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    @Input() order = new Order();
    @Output() createTaskRecord$ = new EventEmitter();

    isTeamTaskBool: boolean;
    workers: Worker[];
    teams: Team[];
    timeTables: TimeTable[];
    taskRecord = new TaskRecord();
    taskRecordsByOrderId: any[];


    constructor(private _workerService: WorkerService,
                private _teamService: TeamService,
                private _timeTableService: TimeTableService,
                private _orderService: OrderService,
                public datepipe: DatePipe,
                private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.getOrder();
        this.getWorkers();
        this.getTeams();
        this.getTimeTables();
    }

    getOrder() {
        this._orderService.getOrder(this.id)
            .subscribe(
                (order) => {
                    this.order = order;
                    if (this.order.is_team_task == '1') {
                        return this.isTeamTaskBool = false;
                    } else {
                        return this.isTeamTaskBool = true;
                    }
                }
            )

    }

    getWorkers() {
        this._workerService.getWorkers()
            .subscribe(
                (workers) => this.workers = workers
            )
    }

    getTeams() {
        this._teamService.getTeams()
            .subscribe(
                (teams) => this.teams = teams
            )

    }

    getTimeTables() {
        this._timeTableService.getTimeTables()
            .subscribe(
                (timeTables) => this.timeTables = timeTables
            )
    }


    createTaskRecord(taskRecord, currentOrder, createTaskRecordForm) {
        taskRecord.order_id = currentOrder.id;
        taskRecord.date = this.datepipe.transform(taskRecord.date, 'yyyy-MM-dd');
        this.createTaskRecord$.emit(this.taskRecord);

        taskRecord.date = this.today;
        taskRecord.time_table_id = '';
        taskRecord.worker_id = '';
        taskRecord.team_id = '';
        taskRecord.quantity = '';
    }
}
