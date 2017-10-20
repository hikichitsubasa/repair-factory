import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRecordListByOrderIdComponent } from './task-record-list-by-order-id.component';

describe('TaskRecordListByOrderIdComponent', () => {
  let component: TaskRecordListByOrderIdComponent;
  let fixture: ComponentFixture<TaskRecordListByOrderIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRecordListByOrderIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRecordListByOrderIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
