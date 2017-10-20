import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {apiUrl} from '../../shared/api-url.constants';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Overtime} from "./overtime";

@Injectable()
export class OvertimeService {

  constructor(private _http: Http) { }

  createOvertime(overtime: Overtime) {
    return this._http.post(apiUrl + "/overtime", overtime)
        .map(data => data.json)
        .toPromise()
  }


  deleteOvertime(id) {
    return this._http.delete(apiUrl + "/overtime/" + id)
        .map(data => data.json)
        .toPromise()

  }

  updateOvertime(overtime) {
    return this._http.put(apiUrl + "/overtime/" + overtime.overtime_record_id, overtime)
        .map(data => data.json)
        .toPromise()

  }


  getOvertimeRecordsByOrderId(id): Observable<any> {
    return this._http.get(apiUrl + '/overtime-records-by-order-id/' + id)
        .map(
            (res: Response) => {
              return res.json().overtimeRecordsByOrderId;
            }
        )
  }

  getOvertimeSumQuantityByOrderId(id): Observable<any> {
    return this._http.get(apiUrl + '/overtime-sum-quantity-by-order-id/' + id)
        .map(
            (res: Response) => {
              return res.json().overtimeSumQuantityByOrderId;
            }
        )
  }

  getDailyOvertimeSumQuantityByOrderId(id):Observable<any> {
    return this._http.get(apiUrl + '/daily-overtime-sum-quantity-by-order-id/' + id)
        .map(
            (res: Response) => {
              return res.json().dailyOvertimeSumQuantityByOrderId;
            }
        )
  }

  getMonthlyOvertimeRecordsGroupByWorkerId(date):Observable<any>{
      return this._http.get(apiUrl + '/monthly-overtime-group-by-worker-id/' + date)
          .map(
              (res:Response)=>{
                  return res.json().monthlyRecords;
              }
          )
  }


}
