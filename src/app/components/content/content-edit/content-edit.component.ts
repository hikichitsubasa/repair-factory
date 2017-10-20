import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Content} from "../../../shared/content/content";

@Component({
    selector: 'app-content-edit',
    templateUrl: './content-edit.component.html',
    styleUrls: ['./content-edit.component.scss']
})
export class ContentEditComponent implements OnInit {
    @Input() content: Content;
    @Output() updateContent$ = new EventEmitter();
    contentEdit: Content = new Content();

    constructor() {
    }

    ngOnInit() {
        Object.assign(this.contentEdit, this.content)
    }

    updateContent() {
        this.contentEdit.editable = false;
        this.updateContent$.emit(this.contentEdit);
    }

}
