import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrderTablesComponent } from './current-order-tables.component';

describe('CurrentOrderTablesComponent', () => {
  let component: CurrentOrderTablesComponent;
  let fixture: ComponentFixture<CurrentOrderTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentOrderTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOrderTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
