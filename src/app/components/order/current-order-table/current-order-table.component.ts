import {Component, OnInit} from '@angular/core';
import {CurrentOrder} from "../../../shared/current-order/current-order";
import {OrderService} from "../../../shared/order/order.service";
import {Response} from "@angular/http";
import {Order} from "../../../shared/order/order";
import {Router} from "@angular/router";

@Component({
    selector: 'current-order-table',
    templateUrl: './current-order-table.component.html',
    styleUrls: ['./current-order-table.component.scss'],
    providers: [OrderService]
})
export class CurrentOrderTableComponent implements OnInit {
    currentOrders: any[];
    selectedOrder: any[];
    sumOvertimeQuantity;

    constructor(private _orderService: OrderService,
                private router: Router) {
    }

    ngOnInit() {
        this.getCurrentOrders();
    }

    getCurrentOrders() {
        this._orderService.getCurrentOrders()
            .subscribe(
                (currentOrders) => this.currentOrders = currentOrders,
                (err: Response) => console.log(err),
                () => this.getSumQuantityAndOvertimeQuantity(this.currentOrders)
            )
    }

    getSumQuantityAndOvertimeQuantity(currentOrders) {
        let sumQuantity;
        let overtimeQuantity;
        console.log(currentOrders);
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
        console.log(currentOrders);
    }


    onCompleteOrder(order: Order) {
        if (confirm("納品完了にしてもよろしいですか？")) {
            this._orderService.onCompleteOrder(order)
                .then(status => this.getCurrentOrders())
                .catch(err => console.log(err))
        }

    }

    goToEdit(order: Order) {
        this.router.navigate(['admin/order-edit', order.id])
    }

    goToTaskRecord(event){
        this.router.navigate(['/admin/task-record/' + event.data.order_id]);
    }

}
