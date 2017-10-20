import { TestBed, inject } from '@angular/core/testing';

import { CurrentOrderService } from './current-order.service';

describe('CurrentOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentOrderService]
    });
  });

  it('should be created', inject([CurrentOrderService], (service: CurrentOrderService) => {
    expect(service).toBeTruthy();
  }));
});
