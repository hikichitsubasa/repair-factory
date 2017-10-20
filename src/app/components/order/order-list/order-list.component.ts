import {Component, OnInit, Input,} from '@angular/core';
import {Response} from "@angular/http";
import {OrderService} from "../../../shared/order/order.service";
import {Order} from "../../../shared/order/order";
import {ClientService} from "../../../shared/client/client.service";
import {Client} from "../../../shared/client/client";
import {Router} from "@angular/router";
import {TaskRecordService} from "../../../shared/task-record/task-record.service";


@Component({
    selector: 'order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss'],
    providers: [OrderService, ClientService]
})
export class OrderListComponent implements OnInit {

    orders: Order[];
    order: Order = new Order();
    selectedOrder: Order;
    clients: Client[];
    sumQuantityGroupByOrderId: any[];


    constructor(private _orderService: OrderService,
                private _clientService: ClientService,
                private _taskRecordService: TaskRecordService,
                private router: Router) {

    }

    ngOnInit() {
        this.getClients();
        this.getOrders();
        this.getTaskRecords();
    }

    getOrders() {
        this._orderService.getOrders()
            .subscribe(
                (orders) => {
                    this.orders = orders;
                },
                (err: Response) => console.log(err)
            )
    }

    getTaskRecords() {
        this._taskRecordService.getSumQuantityGroupByOrderId()
            .subscribe(
                (sumQuantityGroupByOrderId) => {
                    this.sumQuantityGroupByOrderId = sumQuantityGroupByOrderId;
                }
            )
    }

    getClients() {
        this._clientService.getClients()
            .subscribe(
                (clients) => this.clients = clients,
                (err: Response) => console.log(err)
            )
    }

    isCompleted(order) {
        return order.is_completed == '1'
    }

    onCompleteOrder(order) {
        if (confirm("このオーダーを納品完了にしますか？")) {
            this._orderService.onCompleteOrder(order)
                .then(status => this.ngOnInit())
                .catch(err => console.log(err))
        }

    }

    goToEdit(order) {
        this.router.navigate(['admin/order-edit', order.order_id])
    }

    deleteOrder(order) {
        if (confirm("このオーダーを削除しますか？")) {
            this._orderService.deleteOrder(order)
                .then(status => this.ngOnInit());
        }

    }

    goToTaskRecord(event) {
        this.router.navigate(['/admin/task-record/' + event.data.order_id]);
    }


}
