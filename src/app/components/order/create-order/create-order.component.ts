import {Component, OnInit} from '@angular/core';
import {Response} from "@angular/http";
import {SharedService} from "../../../layouts/shared.service";
import {Client} from "../../../shared/client/client";
import {ClientService} from "../../../shared/client/client.service";
import {Content} from "../../../shared/content/content";
import {ContentService} from "../../../shared/content/content.service";
import {WorkPlace} from "../../work-place/work-place";


@Component({
    selector: 'create-order',
    templateUrl: './create-order.component.html',
    styleUrls: ['./create-order.component.scss'],
    providers: [ClientService]
})
export class CreateOrderComponent implements OnInit {
    pageTitle: string = '新規オーダー登録';
    clients: Client[];
    contents: Content[];

    workPlace: WorkPlace[] = [
        {id: 1, place: '本社'},
        {id: 2, place: '指定先工場'},
    ];


    constructor(private _sharedService: SharedService,
                private _clientService: ClientService,
                private _contentService: ContentService) {
        this._sharedService.emitChange(this.pageTitle);
    }


    getClients() {
        this._clientService.getClients()
            .subscribe(
                (clients: Client[]) => this.clients = clients,
                (error: Response) => console.log(error)
            );
    }

    getContents() {
        this._contentService.getContents()
            .subscribe(
                (contents: Content[]) => this.contents = contents,
                (error: Response) => console.log(error)
            );
    }


    ngOnInit() {
        this.getClients();
        this.getContents();
    }

}
