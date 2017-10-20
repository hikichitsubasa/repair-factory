import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Response} from '@angular/http';
import {DatePipe, Location} from "@angular/common";
import {Order} from '../../../shared/order/order'
import {ClientService} from "../../../shared/client/client.service";
import {Client} from '../../../shared/client/client';
import {Content} from "../../../shared/content/content";
import {ContentService} from "../../../shared/content/content.service";
import {OrderService} from "../../../shared/order/order.service";
import {Router} from "@angular/router";

@Component({
    selector: 'order-new',
    templateUrl: './order-new.component.html',
    styleUrls: ['./order-new.component.scss'],
    providers: [ClientService, ContentService, OrderService]
})
export class OrderNewComponent implements OnInit {
    @Input() order;
    @Input() edit;

    clients: Client[];
    contents: Content[];

    newOrder = new Order();
    showCreateClientForm:boolean = false;
    showCreateContentForm:boolean = false;
    isTeamTask: boolean = false;


    constructor(private _clientService: ClientService,
                private _contentService: ContentService,
                private _orderService: OrderService,
                public datepipe: DatePipe,
                private location: Location,
                private router: Router) {

    }

    ngOnInit() {
        this.getClients();
        this.getContents();
    }


    getClients() {
        this._clientService.getClients()
            .subscribe(
                (clients: Client[]) => this.clients = clients,
                (error: Response) => console.log(error)
            )
    }

    getContents() {
        this._contentService.getContents()
            .subscribe(
                (contents: Content[]) => this.contents = contents,
                (error: Response) => console.log(error)
            )
    }

    createOrder(order: Order) {
        order.order_date = this.datepipe.transform(order.order_date, 'yyyy-MM-dd');
        order.delivery_date = this.datepipe.transform(order.delivery_date, 'yyyy-MM-dd');
        order.start_date = this.datepipe.transform(order.start_date, 'yyyy-MM-dd');
        this._orderService.createOrder(order)
            .catch(err => console.log(err))
            .then(() => this.goToOrderList());

    }

    createClient(newClient){
        this._clientService.createClient(newClient)
            .catch(err => console.log(err))
            .then(() => this.getClients())
            .then(() => this.showCreateClientForm = false);
    }

    createContent(newContent){
        this._contentService.createContent(newContent)
            .catch(err => console.log(err))
            .then(() => this.getContents())
            .then(() => this.showCreateContentForm = false);
    }


    updateOrder(order) {
        order.order_date = this.datepipe.transform(order.order_date, 'yyyy-MM-dd');
        order.delivery_date = this.datepipe.transform(order.delivery_date, 'yyyy-MM-dd');
        order.start_date = this.datepipe.transform(order.start_date, 'yyyy-MM-dd');

        this._orderService.updateOrder(order)
            .catch(err => console.log(err))
            .then(() => this.goToOrderList());
    }

    deleteOrder(order) {
        if (confirm("オーダーを削除してよろしいですか？")) {
            this._orderService.deleteOrder(order)
                .then(() => this.goBack())
                .catch(err => console.log(err))
        }

    }

    goToOrderList(): void {
        this.router.navigate(['/admin/order-list']);
    }


    goBack(): void{
        this.location.back();
    }

}
