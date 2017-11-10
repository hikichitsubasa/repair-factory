import {Component, OnInit} from '@angular/core';
import {MailAddress} from "../../../shared/mail-address/mail-address";
import {MailAddressService} from "../../../shared/mail-address/mail-address.service";

@Component({
    selector: 'app-address-list',
    templateUrl: './address-list.component.html',
    styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

    addresses: MailAddress[];

    constructor(private _mailAddressService: MailAddressService) {
    }

    ngOnInit() {
        this.getAddresses();
    }

    getAddresses() {
        this._mailAddressService.getAddresses()
            .subscribe(
                (addresses) => {
                    this.addresses = addresses;
                    console.log(addresses);
                }
            )
    }

    createAddress(address) {
        this._mailAddressService.createAddress(address)
            .then(status => this.getAddresses())
            .catch(err => console.log(err));
    }

    updateAddress(address){
        this._mailAddressService.updateAddress(address.data);
    }

    deleteAddress(address) {
        console.log(address);
        if (confirm('削除してよろしいですか？')) {
            this._mailAddressService.deleteAddress(address.id)
                .then(status => this.ngOnInit())

        }
    }


}
