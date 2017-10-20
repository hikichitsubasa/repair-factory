import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {Client} from '../../../shared/client/client';
import {ClientService} from "../../../shared/client/client.service";


@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
    providers: [ClientService]
})
export class ClientComponent implements OnInit {
    clients: Client[];

    constructor(private _clientService: ClientService) {
    }

    ngOnInit() {
        this.getClients();
    }

    destroyClient(client: Client) {
        this._clientService.destroyClient(client)
            .then(status => this.getClients())
            .catch(err => console.log(err));
    }

    getClients() {
        this._clientService.getClients()
            .subscribe(
                (clients: Client[]) => this.clients = clients,
                (error: Response) => console.log(error)
            );
    }

}
