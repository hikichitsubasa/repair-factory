import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {apiUrl} from "../api-url.constants";
import {MailAddress} from "./mail-address";

@Injectable()
export class MailAddressService {

    constructor(private _http: Http) {
    }

    getAddresses(): Observable<any> {
        return this._http.get(apiUrl + '/mail-addresses')
            .map(
                (res: Response) => {
                    return res.json().mail_addresses;
                }
            )
    }

    createAddress(address: MailAddress) {
        return this._http.post(apiUrl + "/mail-address", address)
            .map(data => data.json)
            .toPromise()
    }

    updateAddress(address) {
        return this._http.put(apiUrl + "/mail-address/" + address.id, address)
            .map(data => data.json)
            .toPromise()
    }

    deleteAddress(id) {
        return this._http.delete(apiUrl + "/mail-address/" + id)
            .map(data => data.json)
            .toPromise()
    }
}
