import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Client} from '../../../shared/client/client';
import {ClientService} from "../../../shared/client/client.service";

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

    clients: Client[];

    constructor(private _clientService: ClientService) {
    }

    ngOnInit() {
        this.getClients();
    }

    getClients() {
        this._clientService.getClients()
            .subscribe(
                (clients) => {
                    this.clients = clients;
                }
            )
    }

    createClient(client){
        this._clientService.createClient(client)
            .then(status => this.getClients())
            .catch(err => console.log(err));

    }

    updateClient(client){
        this._clientService.updateClient(client.data);
    }


}
