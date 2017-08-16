import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../layouts/shared.service";

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  pageTitle: string = 'ホーム';

  constructor(private _sharedService: SharedService) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
  }

}
