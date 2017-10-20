import {Injectable} from '@angular/core';
import {Worker} from './worker';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {apiUrl} from '../../shared/api-url.constants';
import {Observable} from "rxjs";

@Injectable()
export class WorkerService {

  constructor(private _http: Http) {
  }

  createWorker(worker: Worker) {
    return this._http.post(apiUrl + "/worker", worker)
        .map(data => data.json)
        .toPromise()

  }

  deleteWorker(worker: Worker) {
    return this._http.delete(apiUrl + "/worker/" + worker.id)
        .map(data => data.json)
        .toPromise()

  }

  updateWorker(worker: Worker) {
    return this._http.put(apiUrl + "/worker/" + worker.id, worker)
        .map(data => data.json)
        .toPromise()

  }

  getWorker(id): Promise<Worker> {
    return this._http.get(apiUrl + "/worker/" + id)
        .toPromise()
        .then(response => response.json().worker as Worker)

  }

  getWorkers(): Observable<any> {
    return this._http.get(apiUrl + '/workers')
        .map(
            (res: Response) => {
              return res.json().workers;
            }
        )
  }

}
