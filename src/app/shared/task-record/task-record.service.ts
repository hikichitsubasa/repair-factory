import {Injectable} from '@angular/core';
import {TaskRecord} from './task-record';
import {Http, Response} from "@angular/http";
import {apiUrl} from '../../shared/api-url.constants';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class TaskRecordService {

    constructor(private _http: Http) {
    }

    createTaskRecord(taskRecord: TaskRecord) {
        return this._http.post(apiUrl + "/task-record", taskRecord)
            .map(data => data.json)
            .toPromise()
    }


    deleteTaskRecord(id) {
        return this._http.delete(apiUrl + "/task-record/" + id)
            .map(data => data.json)
            .toPromise()

    }

    updateTaskRecord(taskRecord: TaskRecord) {
        return this._http.put(apiUrl + "/task-record/" + taskRecord.id, taskRecord)
            .map(data => data.json)
            .toPromise()

    }

    getTaskRecord(taskRecord: TaskRecord) {
        return this._http.get(apiUrl + "/task-record/" + taskRecord.id)
            .map(data => data.json)
            .toPromise()

    }

    getTaskRecords(): Observable<any> {
        return this._http.get(apiUrl + '/task-records')
            .map(
                (res: Response) => {
                    return res.json().taskRecords;
                }
            )
    }

    getTaskRecordsByOrderId(id): Observable<any> {
        return this._http.get(apiUrl + '/task-records-by-order-id/' + id)
            .map(
                (res: Response) => {
                    return res.json().taskRecordsByOrderId;
                }
            )
    }

    getCurrentOrdersTaskRecords(): Observable<any> {
        return this._http.get(apiUrl + '/current-orders-task-records')
            .map(
                (res: Response) => {
                    return res.json().currentOrdersTaskRecords;
                }
            )
    }

    // Quantity と OvertimeQuantity取ってくる
    // 合計は各メソッドでやる
    getSumQuantityGroupByOrderId(): Observable<any> {
        return this._http.get(apiUrl + '/sum-quantity-group-by-order-id')
            .map(
                (res: Response) => {
                    return res.json().sumQuantityGroupByOrderId;
                }
            )
    }

    getDailyTaskRecords(date): Observable<any> {
        return this._http.get(apiUrl + '/daily-task-records/' + date)
            .map(
                (res: Response) => {
                    return res.json().dailyTaskRecords;
                }
            )
    }

    getWeeklyTaskRecords(orderId, isTeamTask, date): Observable<any> {
        return this._http.get(apiUrl + '/weekly-task-records/' + orderId + '/' + isTeamTask + '/' + date)
            .map(
                (res: Response) => {
                    return res.json().weeklyTaskRecords;
                }
            )
    }

    getWeeklyQuantities(orderId, isTeamTask, date): Observable<any> {
        return this._http.get(apiUrl + '/weekly-quantities/' + orderId + '/' + isTeamTask + '/' + date)
            .map(
                (res: Response) => {
                    return res.json().weeklyQuantities;
                }
            )
    }

    getDailyQuantityByOrderId(id) {
        return this._http.get(apiUrl + '/daily-quantity-by-order-id/' + id)
            .map(
                (res: Response) => {
                    return res.json().dailyQuantityByOrderId;
                }
            )
    }

    getTaskRecordGraphDataByOrderId(id:number, isTeamTask:number) {
        return this._http.get(apiUrl + '/task-record-graph-data-by-order-id/' + id + '/' + isTeamTask)
            .map(
                (res: Response) => {
                    return res.json().taskRecordGraphDataByOrderId;
                }
            )
    }
}