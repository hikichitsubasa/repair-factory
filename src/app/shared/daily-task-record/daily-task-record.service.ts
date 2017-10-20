import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DailyTaskRecordService {

    constructor(private http: Http) {
    }

    getDailyTaskRecords() {
        return this.http.get('../assets/data/daily-task-record-data.json')
            .map((res: Response) => res.json());
    }
}
