import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../layouts/shared.service";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  pageTitle: string = '設定';
  constructor(private _sharedService: SharedService) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
  }

}
