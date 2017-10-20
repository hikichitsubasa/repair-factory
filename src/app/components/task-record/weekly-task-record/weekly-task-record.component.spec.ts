import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTaskRecordComponent } from './weekly-task-record.component';

describe('WeeklyTaskRecordComponent', () => {
  let component: WeeklyTaskRecordComponent;
  let fixture: ComponentFixture<WeeklyTaskRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyTaskRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyTaskRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
