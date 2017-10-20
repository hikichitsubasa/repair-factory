import {Injectable} from '@angular/core';
import {TimeTable} from './time-table';
import {Http, Response} from "@angular/http";
import {apiUrl} from '../../shared/api-url.constants';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class TimeTableService {

  constructor(private _http: Http) {
  }

  createTimeTable(timeTable: TimeTable) {
    return this._http.post(apiUrl + "/time-table", timeTable)
        .map(data => data.json)
        .toPromise()
  }

  deleteTimeTable(timeTable: TimeTable) {
    return this._http.delete(apiUrl + "/time-table/" + timeTable.id)
        .map(data => data.json)
        .toPromise()

  }

  updateTimeTable(timeTable: TimeTable) {
    return this._http.put(apiUrl + "/time-table/" + timeTable.id, timeTable)
        .map(data => data.json)
        .toPromise()

  }

  getTimeTable(id: number): Promise<TimeTable> {
    return this._http.get(apiUrl + "/time-table/" + id)
        .toPromise()
        .then(response => response.json().timeTable as TimeTable)
  }


  getTimeTables(): Observable<any> {
    return this._http.get(apiUrl + '/time-tables')
        .map(
            (res: Response) => {
              return res.json().timeTables;
            }
        )
  }


}
