import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorkerNewComponent } from './page-worker-new.component';

describe('PageWorkerNewComponent', () => {
  let component: PageWorkerNewComponent;
  let fixture: ComponentFixture<PageWorkerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWorkerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWorkerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
