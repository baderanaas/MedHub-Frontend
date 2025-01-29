import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialHistoryComponent } from './social-history.component';

describe('SocialHistoryComponent', () => {
  let component: SocialHistoryComponent;
  let fixture: ComponentFixture<SocialHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialHistoryComponent]
    });
    fixture = TestBed.createComponent(SocialHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
