import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTargetProgressComponent } from './daily-target-progress.component';

describe('DailyTargetProgressComponent', () => {
  let component: DailyTargetProgressComponent;
  let fixture: ComponentFixture<DailyTargetProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTargetProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTargetProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
