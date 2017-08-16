import { Component, OnInit } from '@angular/core';
import {MdDialogRef, MdDialog, MdDialogConfig} from "@angular/material";
import {SharedService} from "../../layouts/shared.service";

@Component({
  selector: 'dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  pageTitle: string = "Dialog";
  dialogRef: MdDialogRef<DialogResultComponent>;
  selectedOption: string;

  constructor(
      public dialog: MdDialog,
      private _sharedService: SharedService
  ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogResultComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-result',
  templateUrl: './dialog-result.html',
})
export class DialogResultComponent {
  jazzMessage = 'Jazzy jazz jazz';
  constructor(public dialogRef: MdDialogRef<DialogResultComponent>) {}
}