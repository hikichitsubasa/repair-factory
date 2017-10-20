import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTaskRecordNewComponent } from './page-task-record-new.component';

describe('PageTaskRecordNewComponent', () => {
  let component: PageTaskRecordNewComponent;
  let fixture: ComponentFixture<PageTaskRecordNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTaskRecordNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTaskRecordNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
