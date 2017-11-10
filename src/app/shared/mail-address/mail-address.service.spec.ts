import { TestBed, inject } from '@angular/core/testing';

import { MailAddressService } from './mail-address.service';

describe('MailAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailAddressService]
    });
  });

  it('should be created', inject([MailAddressService], (service: MailAddressService) => {
    expect(service).toBeTruthy();
  }));
});
