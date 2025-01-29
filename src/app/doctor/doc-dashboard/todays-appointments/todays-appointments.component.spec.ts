import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysAppointmentsComponent } from './todays-appointments.component';

describe('TodaysAppointmentsComponent', () => {
  let component: TodaysAppointmentsComponent;
  let fixture: ComponentFixture<TodaysAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodaysAppointmentsComponent]
    });
    fixture = TestBed.createComponent(TodaysAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
