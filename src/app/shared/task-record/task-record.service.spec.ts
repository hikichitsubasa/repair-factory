import { TestBed, inject } from '@angular/core/testing';

import { TaskRecordService } from './task-record.service';

describe('TaskRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskRecordService]
    });
  });

  it('should be created', inject([TaskRecordService], (service: TaskRecordService) => {
    expect(service).toBeTruthy();
  }));
});
