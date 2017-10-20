import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTaskRecordComponent } from './page-task-record.component';

describe('PageTaskRecordComponent', () => {
  let component: PageTaskRecordComponent;
  let fixture: ComponentFixture<PageTaskRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTaskRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTaskRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
