import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Order} from "../../../shared/order/order";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-overtime-list',
  templateUrl: './overtime-list.component.html',
  styleUrls: ['./overtime-list.component.scss']
})
export class OvertimeListComponent implements OnInit {

  @Input() overtimeRecordsByOrderId;
  @Output() deleteOvertime$ = new EventEmitter();
  @Output() selectOvertime$ = new EventEmitter();
  id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  deleteOvertime(overtime){
    this.deleteOvertime$.emit(overtime);
    console.log(overtime);
  }

  selectOvertime(overtime){
    this.selectOvertime$.emit(overtime);
  }

}
