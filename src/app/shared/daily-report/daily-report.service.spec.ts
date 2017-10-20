import { TestBed, inject } from '@angular/core/testing';

import { DailyReportService } from './daily-report.service';

describe('DailyReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DailyReportService]
    });
  });

  it('should be created', inject([DailyReportService], (service: DailyReportService) => {
    expect(service).toBeTruthy();
  }));
});
