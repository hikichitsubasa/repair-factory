import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Order} from "../../../shared/order/order";
import {Worker} from "../../../shared/worker/worker";
import {ActivatedRoute} from "@angular/router";
import {WorkerService} from "../../../shared/worker/worker.service";
import {Overtime} from "../../../shared/overtime/overtime";
import {OvertimeService} from "../../../shared/overtime/overtime.service";

@Component({
    selector: 'app-task-record-overtime-new',
    templateUrl: './task-record-overtime-new.component.html',
    styleUrls: ['./task-record-overtime-new.component.scss']
})
export class TaskRecordOvertimeNewComponent implements OnInit {

    id = this.route.snapshot.params['id'];
    today = this.datepipe.transform(new Date(), 'yyyy-MM-dd')
    @Input() order = new Order();
    @Output() createOvertime$ = new EventEmitter();
    workers: Worker[];
    overtime = new Overtime();


    constructor(private datepipe: DatePipe,
                private route: ActivatedRoute,
                private _workerService: WorkerService,
                private _overtimeService: OvertimeService) {
    }

    ngOnInit() {
        this.getWorkers();
    }

    getWorkers() {
        this._workerService.getWorkers()
            .subscribe(
                (workers) => this.workers = workers
            )
    }


    createOvertime(overtime, currentOrder, createOvertimeForm) {
        overtime.order_id = currentOrder.id;
        overtime.overtime_date = this.datepipe.transform(overtime.overtime_date, 'yyyy-MM-dd');
        this.createOvertime$.emit(overtime);
        overtime.overtime_date = this.today;
        overtime.overtime_hours = '';
        overtime.worker_id = '';
        overtime.overtime_quantity = '';

    }

}
