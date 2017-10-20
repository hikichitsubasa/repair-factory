import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyReportButtonComponent } from './daily-report-button.component';

describe('DailyReportButtonComponent', () => {
  let component: DailyReportButtonComponent;
  let fixture: ComponentFixture<DailyReportButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyReportButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyReportButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
