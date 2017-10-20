import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRecordNewComponent } from './task-record-new.component';

describe('TaskRecordNewComponent', () => {
  let component: TaskRecordNewComponent;
  let fixture: ComponentFixture<TaskRecordNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRecordNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRecordNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
