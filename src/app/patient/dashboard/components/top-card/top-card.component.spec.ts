import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCardComponent } from './top-card.component';

describe('TopCardComponent', () => {
  let component: TopCardComponent;
  let fixture: ComponentFixture<TopCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopCardComponent]
    });
    fixture = TestBed.createComponent(TopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
