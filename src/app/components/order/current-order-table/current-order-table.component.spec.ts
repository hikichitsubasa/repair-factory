import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrderTableComponent } from './current-order-table.component';

describe('CurrentOrderTableComponent', () => {
  let component: CurrentOrderTableComponent;
  let fixture: ComponentFixture<CurrentOrderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentOrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
