import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-task-record-graph-by-order-id',
    templateUrl: './task-record-graph-by-order-id.component.html',
    styleUrls: ['./task-record-graph-by-order-id.component.scss']
})
export class TaskRecordGraphByOrderIdComponent implements OnInit {

    @Input() order;
    @Input() taskRecordGraphDataByOrderId;
    @Input() barChartData;
    @Input() options;

    constructor() {
    }

    ngOnInit() {
    }





    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
}
