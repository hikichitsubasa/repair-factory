import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRecordEditComponent } from './task-record-edit.component';

describe('TaskRecordEditComponent', () => {
  let component: TaskRecordEditComponent;
  let fixture: ComponentFixture<TaskRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRecordEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
