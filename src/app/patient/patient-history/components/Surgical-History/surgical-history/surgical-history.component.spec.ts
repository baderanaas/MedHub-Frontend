import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalHistoryComponent } from './surgical-history.component';

describe('SurgicalHistoryComponent', () => {
  let component: SurgicalHistoryComponent;
  let fixture: ComponentFixture<SurgicalHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurgicalHistoryComponent]
    });
    fixture = TestBed.createComponent(SurgicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
