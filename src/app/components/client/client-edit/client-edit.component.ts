import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Client} from '../../../shared/client/client';

@Component({
    selector: 'app-client-edit',
    templateUrl: './client-edit.component.html',
    styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
    @Input() client: Client;
    @Output() updateClient$ = new EventEmitter();
    clientEdit: Client = new Client();

    constructor() {
    }

    ngOnInit() {
        Object.assign(this.clientEdit, this.client);
    }

    updateClient(){
        this.clientEdit.editable = false;
        this.updateClient$.emit(this.clientEdit);
    }

}
