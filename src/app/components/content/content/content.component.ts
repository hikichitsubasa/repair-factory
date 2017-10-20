import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {Content} from "../../../shared/content/content";
import {ContentService} from "../../../shared/content/content.service";

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    providers: [ContentService]
})
export class ContentComponent implements OnInit {
    contents: Content[];

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
            )
    }

}
