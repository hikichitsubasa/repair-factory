import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorkerListComponent } from './page-worker-list.component';

describe('PageWorkerListComponent', () => {
  let component: PageWorkerListComponent;
  let fixture: ComponentFixture<PageWorkerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWorkerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWorkerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
