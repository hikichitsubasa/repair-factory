import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class WeeklyTaskRecordService {

    constructor(private http: Http) {
    }

    getWeeklyTaskRecords() {
        return this.http.get('../assets/data/weekly-task-record-data.json')
            .map((res: Response) => res.json());
    }

}
