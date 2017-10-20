import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRecordDetailComponent } from './task-record-detail.component';

describe('TaskRecordDetailComponent', () => {
  let component: TaskRecordDetailComponent;
  let fixture: ComponentFixture<TaskRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
