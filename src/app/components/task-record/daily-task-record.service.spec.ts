import { TestBed, inject } from '@angular/core/testing';

import { DailyTaskRecordService } from './daily-task-record.service';

describe('DailyTaskRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyTaskRecordService]
    });
  });

  it('should be created', inject([DailyTaskRecordService], (service: DailyTaskRecordService) => {
    expect(service).toBeTruthy();
  }));
});
