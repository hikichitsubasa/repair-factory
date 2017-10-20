import {Injectable} from '@angular/core';
import {Client} from './client';
import {Http, Response} from "@angular/http";
import {apiUrl} from '../../shared/api-url.constants';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class ClientService {

    constructor(private _http: Http) {
    }

    createClient(client: Client) {
        return this._http.post(apiUrl + "/client", client)
            .map(data => data.json)
            .toPromise()
    }

    destroyClient(client: Client) {
        return this._http.delete(apiUrl + "/client/" + client.id)
            .map(data => data.json)
            .toPromise()

    }

    updateClient(client: Client) {
        return this._http.put(apiUrl + "/client/" + client.id, client)
            .map(data => data.json)
            .toPromise()

    }


    getClient(client: Client) {
        return this._http.get(apiUrl + "/client/" + client.id)
            .map(data => data.json)
            .toPromise()

    }

    getClients(): Observable<any> {
        return this._http.get(apiUrl + '/clients')
            .map(
                (res: Response) => {
                    return res.json().clients;
                }
            )
    }

}
