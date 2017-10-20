import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyOvertimeListComponent } from './monthly-overtime-list.component';

describe('MonthlyOvertimeListComponent', () => {
  let component: MonthlyOvertimeListComponent;
  let fixture: ComponentFixture<MonthlyOvertimeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyOvertimeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyOvertimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
