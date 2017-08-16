import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../layouts/shared.service";
import {DailyTaskRecordService} from "../daily-task-record.service";
import {DailyTaskRecord} from "./daily-task-record";

@Component({
  selector: 'daily-task-record-table',
  templateUrl: './daily-task-record-table.component.html',
  styleUrls: ['./daily-task-record-table.component.scss'],
  providers: [DailyTaskRecordService]
})


export class DailyTaskRecordTableComponent implements OnInit {
  dailyTaskRecords: DailyTaskRecord[];

  constructor( private dailyTaskRecordService: DailyTaskRecordService){}

  getDailyTaskRecords(): void{
    this.dailyTaskRecords = this.dailyTaskRecordService.getDailyTaskRecords();
  }

  ngOnInit(): void {
    this.getDailyTaskRecords();
  }

}
