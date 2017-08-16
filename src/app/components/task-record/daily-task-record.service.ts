import { Injectable } from '@angular/core';
import {DailyTaskRecord} from "./daily-task-record-table/daily-task-record";
import {DAILYTASKRECORDS} from "./daily-task-record-table/mock-daily-task-record-table";

@Injectable()
export class DailyTaskRecordService {
  getDailyTaskRecords(): DailyTaskRecord[]{
    return DAILYTASKRECORDS;
  }

}
