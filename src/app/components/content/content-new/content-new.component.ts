import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Content} from "../../../shared/content/content";

@Component({
  selector: 'app-content-new',
  templateUrl: './content-new.component.html',
  styleUrls: ['./content-new.component.scss']
})
export class ContentNewComponent implements OnInit {
  newContent = new Content();
  @Output() createContent$ = new EventEmitter();
  @Output() hideForm$ = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  createContent(newContent){
    this.createContent$.emit(newContent);
  }

  hideForm(){
    this.hideForm$.emit();
  }

}
