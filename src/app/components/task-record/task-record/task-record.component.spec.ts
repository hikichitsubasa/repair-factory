import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRecordComponent } from './task-record.component';

describe('TaskRecordComponent', () => {
  let component: TaskRecordComponent;
  let fixture: ComponentFixture<TaskRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
