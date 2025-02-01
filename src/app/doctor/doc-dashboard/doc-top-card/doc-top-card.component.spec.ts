import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTopCardComponent } from './doc-top-card.component';

describe('DocTopCardComponent', () => {
  let component: DocTopCardComponent;
  let fixture: ComponentFixture<DocTopCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocTopCardComponent]
    });
    fixture = TestBed.createComponent(DocTopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
