import {Component, OnInit, Input} from '@angular/core';
import {Order} from "../../../shared/order/order";
import {Client} from "../../../shared/client/client";
import {Content} from "../../../shared/content/content";
import {OrderService} from "../../../shared/order/order.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../../shared/client/client.service";
import {ContentService} from "../../../shared/content/content.service";

@Component({
  selector: 'app-page-order-edit',
  templateUrl: './page-order-edit.component.html',
  styleUrls: ['./page-order-edit.component.scss']
})
export class PageOrderEditComponent implements OnInit {

  order = new Order();

  clients: Client[];
  contents: Content[];
  id = this.route.snapshot.params['id'];
  edit: boolean = true;

  constructor(private _orderService: OrderService,
              private route: ActivatedRoute,
              private router: Router,
              private _clientService: ClientService,
              private _contentService: ContentService) {
  }

  ngOnInit() {
    this.getOrder();
    this.getClients();
    this.getContents();
  }

  getOrder() {
    this._orderService.getOrder(this.id)
        .subscribe(
            (order: Order) => this.order = order
        );
  }

  getClients() {
    this._clientService.getClients()
        .subscribe(
            (clients) => this.clients = clients
        )
  }

  getContents() {
    this._contentService.getContents()
        .subscribe(
            (contents) => this.contents = contents
        )
  }


}
