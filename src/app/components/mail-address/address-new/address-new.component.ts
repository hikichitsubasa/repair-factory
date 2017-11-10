import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MailAddress} from "../../../shared/mail-address/mail-address";

@Component({
  selector: 'app-address-new',
  templateUrl: './address-new.component.html',
  styleUrls: ['./address-new.component.scss']
})
export class AddressNewComponent implements OnInit {

  newAddress = new MailAddress();
  @Output() createAddress$ = new EventEmitter();
  @Output() hideForm$ = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  createAddress(newAddress: MailAddress){
    this.createAddress$.emit(newAddress);
  }

  hideForm() {
    this.hideForm$.emit();
  }

}
