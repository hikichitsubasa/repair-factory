import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTaskRecordComponent } from './daily-task-record.component';

describe('DailyTaskRecordComponent', () => {
  let component: DailyTaskRecordComponent;
  let fixture: ComponentFixture<DailyTaskRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTaskRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTaskRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
