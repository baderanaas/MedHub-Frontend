import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesPopupComponent } from './quotes-popup.component';

describe('QuotesPopupComponent', () => {
  let component: QuotesPopupComponent;
  let fixture: ComponentFixture<QuotesPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesPopupComponent]
    });
    fixture = TestBed.createComponent(QuotesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
