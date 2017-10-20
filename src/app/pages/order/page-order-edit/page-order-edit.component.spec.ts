import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrderEditComponent } from './page-order-edit.component';

describe('PageOrderEditComponent', () => {
  let component: PageOrderEditComponent;
  let fixture: ComponentFixture<PageOrderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOrderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOrderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
