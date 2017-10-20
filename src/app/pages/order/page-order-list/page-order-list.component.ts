import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../../layouts/shared.service";
import {OrderService} from "../../../shared/order/order.service";
import {Response} from "@angular/http";
import {Order} from "../../../shared/order/order";

@Component({
    selector: 'page-order-list',
    templateUrl: './page-order-list.component.html',
    styleUrls: ['./page-order-list.component.scss']
})
export class PageOrderListComponent implements OnInit {
    pageTitle: string = 'オーダー一覧';

    constructor(private _sharedService: SharedService,
                private _orderService: OrderService) {
        this._sharedService.emitChange(this.pageTitle);


    }

    ngOnInit() {
    }


}
