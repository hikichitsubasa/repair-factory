import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-order-detail-table',
  templateUrl: './order-detail-table.component.html',
  styleUrls: ['./order-detail-table.component.scss']
})
export class OrderDetailTableComponent implements OnInit {

  @Input() order;
  constructor() { }

  ngOnInit() {
  }

}
