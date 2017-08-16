import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBarChartComponent } from './sales-bar-chart.component';

describe('SalesBarChartComponent', () => {
  let component: SalesBarChartComponent;
  let fixture: ComponentFixture<SalesBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
