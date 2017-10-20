import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../shared/order/order.service";
import {Order} from "../../../shared/order/order";
import {TeamService} from "../../../shared/team/team.service";
import {WorkerService} from "../../../shared/worker/worker.service";
import {Team} from "../../../shared/team/team";
import {TimeTableService} from "../../../shared/time-table/time-table.service";
import {TimeTable} from "../../../shared/time-table/time-table";
import {TaskRecordService} from "../../../shared/task-record/task-record.service";
import {TaskRecord} from "../../../shared/task-record/task-record";
import {DatePipe} from "@angular/common";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-current-order-tables',
    templateUrl: './current-order-tables.component.html',
    styleUrls: ['./current-order-tables.component.scss'],
    providers: [TaskRecordService, TimeTableService, TeamService, WorkerService, OrderService]
})
export class CurrentOrderTablesComponent implements OnInit {

    taskRecord: TaskRecord = new TaskRecord();
    currentOrders: Order[];
    currentOrdersTaskRecords: any[];
    sumQuantityGroupByOrderId: any[];
    workers: Worker[];
    teams: Team[];
    timeTables: TimeTable[];
    isEdit: boolean = false;


    constructor(private _orderService: OrderService,
                private _workerService: WorkerService,
                private _teamService: TeamService,
                private _timeTableService: TimeTableService,
                private _taskRecordService: TaskRecordService,
                private datepipe: DatePipe,
                private router: Router) {
    }

    ngOnInit() {
        this.getCurrentOrders();
        this.getSumQuantityGroupByOrderId();
        this.getWorkers();
        this.getTeams();
        this.getTimeTables();
        this.getCurrentOrdersTaskRecords();
    }

    getCurrentOrders() {
        this._orderService.getCurrentOrders()
            .subscribe(
                (currentOrders) => {
                    this.currentOrders = currentOrders;
                    this.getSumQuantityAndOvertimeQuantity(this.currentOrders);
                },
                (err) => console.log(err)

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

    isTeamTask(currentOrder: Order) {
        if (currentOrder.is_team_task == "1") {
            return true;
        }
    }

    getTimeTables() {
        this._timeTableService.getTimeTables()
            .subscribe(
                (timeTables) => this.timeTables = timeTables
            )
    }

    getCurrentOrdersTaskRecords() {
        this._taskRecordService.getCurrentOrdersTaskRecords()
            .subscribe(
                (currentOrdersTaskRecords) => this.currentOrdersTaskRecords = currentOrdersTaskRecords,
            )
    }

    getSumQuantityGroupByOrderId() {
        this._taskRecordService.getSumQuantityGroupByOrderId()
            .subscribe(
                (sumQuantityGroupByOrderId) => this.sumQuantityGroupByOrderId = sumQuantityGroupByOrderId,
            );
    }

    getSumQuantityAndOvertimeQuantity(currentOrders){
        let sumQuantity;
        let overtimeQuantity;
        for(let prop of currentOrders){
            if(prop.sum_quantity == null){prop.sum_quantity = 0}
            if(prop.overtime_sum_quantity == null){prop.overtime_sum_quantity = 0}

            sumQuantity = parseInt(prop.sum_quantity);
            overtimeQuantity = parseInt(prop.overtime_sum_quantity);
            prop.totalQuantity = sumQuantity + overtimeQuantity;
            if(prop.totalQuantity !== 0){
                prop.progress = prop.totalQuantity / prop.quantity;
            } else {
                prop.progress = 0;
            }
        }

    }

    goToCreateTaskRecord(order) {
        this.router.navigate(['task-record-new/', order.order_id])
    }


}
