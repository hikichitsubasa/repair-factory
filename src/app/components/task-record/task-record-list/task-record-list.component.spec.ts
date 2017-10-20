import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRecordListComponent } from './task-record-list.component';

describe('TaskRecordListComponent', () => {
  let component: TaskRecordListComponent;
  let fixture: ComponentFixture<TaskRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
