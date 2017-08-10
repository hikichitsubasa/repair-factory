import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  pageTitle: any;
  rtl: boolean = false;
  @Input() openedSidebar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getClasses(){
    return {
      'open-sidebar': this.openedSidebar,
      'rtl': this.rtl
    }
  }

  sidebarState(){
    this.openedSidebar = !this.openedSidebar;
  }

}
