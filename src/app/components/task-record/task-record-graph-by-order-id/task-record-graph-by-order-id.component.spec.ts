import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRecordGraphByOrderIdComponent } from './task-record-graph-by-order-id.component';

describe('TaskRecordGraphByOrderIdComponent', () => {
  let component: TaskRecordGraphByOrderIdComponent;
  let fixture: ComponentFixture<TaskRecordGraphByOrderIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRecordGraphByOrderIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRecordGraphByOrderIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
