import {Component, OnInit, ViewChild} from '@angular/core';
import {SharedService} from "../../../layouts/shared.service";
import {OrderService} from "../../../shared/order/order.service";

@Component({
    selector: 'admin-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

    pageTitle: string = 'ホーム';
    monthlySales = {totalPrice: 0, totalPriceOvertime: 0};

    constructor(private _sharedService: SharedService,
                private _orderService: OrderService) {
        this._sharedService.emitChange(this.pageTitle);
    }


    ngOnInit() {
        this.getMonthlySales();
    }

    getMonthlySales() {
        this._orderService.getMonthlySales()
            .subscribe(
                (monthlySales) => {
                    this.monthlySales = monthlySales;
                    console.log(this.monthlySales);
                }
            );
        return this.monthlySales;
    }

}
