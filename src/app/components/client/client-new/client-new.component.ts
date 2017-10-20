import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Client} from '../../../shared/client/client';

@Component({
    selector: 'app-client-new',
    templateUrl: './client-new.component.html',
    styleUrls: ['./client-new.component.scss'],
    providers: []
})
export class ClientNewComponent implements OnInit {
    newClient = new Client();
    @Output() createClient$ = new EventEmitter();
    @Output() hideForm$ = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    createClient(newClient) {
        this.createClient$.emit(newClient);
    }

    hideForm(){
        this.hideForm$.emit();
    }


}
