import {Injectable} from '@angular/core';
import {Order} from './order';
import {Http, Response} from "@angular/http";
import {apiUrl} from '../../shared/api-url.constants';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class OrderService {

    constructor(private _http: Http) {
    }

    createOrder(order: Order) {
        return this._http.post(apiUrl + "/order", order)
            .map(data => data.json)
            .toPromise()
    }

    deleteOrder(order) {
        return this._http.delete(apiUrl + "/order/" + order.order_id)
            .map(data => data.json)
            .toPromise()

    }

    updateOrder(order: Order) {
        return this._http.put(apiUrl + "/order/" + order.id, order)
            .map(data => data.json)
            .toPromise()

    }

    getOrder(id: number): Observable<any> {
        return this._http.get(apiUrl + "/order/" + id)
            .map(
                (res: Response) => {
                    return res.json().order;
                }
            )
    }


    getOrders(): Observable<any> {
        return this._http.get(apiUrl + '/orders')
            .map(
                (res: Response) => {
                    return res.json().orders;
                }
            )
    }

    getCurrentOrders(): Observable<any> {
        return this._http.get(apiUrl + '/current-orders')
            .map(
                (res: Response) => {
                    return res.json().currentOrders;
                }
            )
    }

    getMonthlySales(): Observable<any>{
        return this._http.get(apiUrl + '/monthly-sales')
            .map(
                (res: Response) => {
                    return res.json().monthlySales;
                }
            )
    }

    onCompleteOrder(order) {
        return this._http.put(apiUrl + "/order-complete/" + order.order_id, order)
            .map(data => data.json)
            .toPromise()
    }

}
