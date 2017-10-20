import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-daily-target-progress',
  templateUrl: './daily-target-progress.component.html',
  styleUrls: ['./daily-target-progress.component.scss']
})
export class DailyTargetProgressComponent implements OnInit {

  @Input() dailyQuantityByOrderId;
  @Input() dailyQuantity;
  @Input() dailyOvertimeQuantity;
  @Input() date;
  @Input() order;
  @Output() changeDate$ = new EventEmitter();
  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {

  }

  changeDate(date) {
    this.date = this.datePipe.transform(date, 'yyyy-MM-dd');
    this.changeDate$.emit(date);
  }


}
