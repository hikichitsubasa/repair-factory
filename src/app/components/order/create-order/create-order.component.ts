import {Component, OnInit} from '@angular/core';
import {Client} from "../../client/client";
import {RepairContext} from "../repair-context";
import {WorkPlace} from "../../work-place/work-place";

@Component({
    selector: 'create-order',
    templateUrl: './create-order.component.html',
    styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
    pageTitle: string = '新規オーダー';
    clients: Client[] = [
        {id: 1, name: 'Wedge'},
        {id: 2, name: 'Mangetsu'},
        {id: 3, name: 'Nyam'},
        {id: 4, name: 'amojifoji frmiaojiroamifra'},
    ];

    repairContexts: RepairContext[] = [
        {id: 1, context: 'キズ'},
        {id: 2, context: '汚れ'},
        {id: 3, context: '飛び込み'},
        {id: 4, context: '色差'},
    ];

    workPlaces: WorkPlace[] = [
        {id: 1, place: '本社'},
        {id: 2, place: '指定先工場'},
    ];

    ngOnInit() {

    }

    constructor() {
    }


}
