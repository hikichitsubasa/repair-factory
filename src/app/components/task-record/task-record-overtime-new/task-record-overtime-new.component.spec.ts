import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRecordOvertimeNewComponent } from './task-record-overtime-new.component';

describe('TaskRecordOvertimeNewComponent', () => {
  let component: TaskRecordOvertimeNewComponent;
  let fixture: ComponentFixture<TaskRecordOvertimeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRecordOvertimeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRecordOvertimeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
