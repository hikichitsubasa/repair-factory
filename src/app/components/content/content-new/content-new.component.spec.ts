import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNewComponent } from './content-new.component';

describe('ContentNewComponent', () => {
  let component: ContentNewComponent;
  let fixture: ComponentFixture<ContentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
