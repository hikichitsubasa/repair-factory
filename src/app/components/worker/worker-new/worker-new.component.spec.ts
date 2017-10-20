import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerNewComponent } from './worker-new.component';

describe('WorkerNewComponent', () => {
  let component: WorkerNewComponent;
  let fixture: ComponentFixture<WorkerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
