import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CurrentOrderService {

    constructor(private http: Http) {
    }

    getCurrentOrders() {
        return this.http.get('../assets/data/current-order-data.json')
            .map((res: Response) => res.json());
    }
}
