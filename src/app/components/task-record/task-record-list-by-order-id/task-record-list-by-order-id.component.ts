import {Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import {Order} from "../../../shared/order/order";
import {OrderService} from "../../../shared/order/order.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-task-record-list-by-order-id',
    templateUrl: './task-record-list-by-order-id.component.html',
    styleUrls: ['./task-record-list-by-order-id.component.scss']
})
export class TaskRecordListByOrderIdComponent implements OnInit {

    @Input() taskRecordsByOrderId;
    @Input() order;
    @Output() deleteTaskRecord$ = new EventEmitter();
    @Output() selectTaskRecord$ = new EventEmitter();
    currentOrder = new Order();
    isTeamTask: boolean = false;
    id = this.route.snapshot.params['id'];

    constructor(private _orderService: OrderService,
                private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.getOrder();
    }

    checkIsTeamTask(currentOrder) {
        if (currentOrder.is_team_task == "2") { // "チーム制"は2
            return this.isTeamTask = true;
        }
    }

    getOrder() {
        return this._orderService.getOrder(this.id)
            .subscribe(
                (currentOrder) => {
                    this.currentOrder = currentOrder;
                    this.checkIsTeamTask(this.currentOrder)
                }
            )
    }

    selectTaskRecord(taskRecord){
        this.selectTaskRecord$.emit(taskRecord);
    }

    deleteTaskRecord(taskRecord){
        this.deleteTaskRecord$.emit(taskRecord);
    }
}
