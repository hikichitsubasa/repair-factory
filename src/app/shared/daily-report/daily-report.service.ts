import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {apiUrl} from "../../shared/api-url.constants";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";


@Injectable()
export class DailyReportService {

    constructor(private _http: Http) {
    }

    getDailyReport(id, date): Observable<any> {
        return this._http.get(apiUrl + "/daily-report/" + id + "/" + date)
            .map(
                (res: Response) => {
                    return res.json().dailyReport;
                }
            )
    }

    createDailyReport(id): Observable<any> {
        return this._http.post(apiUrl + "/create-daily-report/" + id , id )
            .map(
                (res: Response) => {
                    return res.json().sendDailyReport;
                }
            )
    }

}
