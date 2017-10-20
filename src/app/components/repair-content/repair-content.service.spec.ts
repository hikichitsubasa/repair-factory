import { TestBed, inject } from '@angular/core/testing';

import { RepairContentService } from './repair-content.service';

describe('RepairContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepairContentService]
    });
  });

  it('should be created', inject([RepairContentService], (service: RepairContentService) => {
    expect(service).toBeTruthy();
  }));
});
