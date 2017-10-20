import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../layouts/shared.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pageTitle: string = "ホーム";
  constructor(private _sharedService: SharedService) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
  }

}
