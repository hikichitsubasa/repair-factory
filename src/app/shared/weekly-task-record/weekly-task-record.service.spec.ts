import { TestBed, inject } from '@angular/core/testing';

import { WeeklyTaskRecordService } from './weekly-task-record.service';

describe('WeeklyTaskRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeeklyTaskRecordService]
    });
  });

  it('should be created', inject([WeeklyTaskRecordService], (service: WeeklyTaskRecordService) => {
    expect(service).toBeTruthy();
  }));
});
