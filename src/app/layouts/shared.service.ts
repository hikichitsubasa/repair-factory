import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from "@angular/http";
import {apiUrl} from "../shared/api-url.constants";
import {DatePipe} from "@angular/common";

@Injectable()
export class SharedService {
    private emitChangeSource = new Subject(); // emitChangeSource データを保持する変数

    changeEmitted$ = this.emitChangeSource.asObservable();
    now = new Date();
    today = this.datePipe.transform(this.now, 'yyyy-MM-dd');

    constructor(private _http: Http,
                private datePipe: DatePipe) {

    }


    emitChange(change: string) {
        this.emitChangeSource.next(change);
    }

    getCurrentWeekdays(date) {
        return this._http.get(apiUrl + '/current-weekdays/' + date)
            .map(
                (res: Response) => {
                    return res.json().currentWeekdays;
                }
            )
    }


}
