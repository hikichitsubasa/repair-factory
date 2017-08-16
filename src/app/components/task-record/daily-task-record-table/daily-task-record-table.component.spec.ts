import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTaskRecordTableComponent } from './daily-task-record-table.component';

describe('DailyTaskRecordTableComponent', () => {
  let component: DailyTaskRecordTableComponent;
  let fixture: ComponentFixture<DailyTaskRecordTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTaskRecordTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTaskRecordTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
