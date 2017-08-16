import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../../layouts/shared.service";

@Component({
    selector: 'current-order-table',
    templateUrl: './current-order-table.component.html',
    styleUrls: ['./current-order-table.component.scss']
})
export class CurrentOrderTableComponent implements OnInit {
    loadingIndicator: boolean = true;
    rows = [];
    editing = {};

    constructor(private _sharedService: SharedService) {
        this.fetch((data) => {
            this.rows = data;
            setTimeout(() => {
                this.loadingIndicator = false;
            }, 1500);
        });
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/current-order-table-data.json');

        req.onload = () => {
            cb(JSON.parse(req.response));
        }

        req.send();
    }

    ngOnInit() {
    }

}
