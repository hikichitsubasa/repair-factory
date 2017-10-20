import {Component, OnInit, Input} from '@angular/core';
import {Response} from '@angular/http';
import {Content} from "../../../shared/content/content";
import {ContentService} from "../../../shared/content/content.service";

@Component({
    selector: 'app-content-list',
    templateUrl: './content-list.component.html',
    styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
    @Input() contents: any = {};

    constructor(private _contentService: ContentService) {
    }

    ngOnInit() {
        this.getContents();
    }



    getContents() {
        this._contentService.getContents()
            .subscribe(
                (contents: Content[]) => this.contents = contents,
                (error: Response) => console.log(error)
            );
    }

    createContent(content: Content) {
        this._contentService.createContent(content)
            .then(status => this.getContents())
            .catch(err => console.log(err));
    }



    updateContent(content){
        this._contentService.updateContent(content.data);
    }

}
