import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimeEditComponent } from './overtime-edit.component';

describe('OvertimeEditComponent', () => {
  let component: OvertimeEditComponent;
  let fixture: ComponentFixture<OvertimeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertimeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
