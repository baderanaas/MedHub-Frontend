import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocTopbarComponent } from './doc-topbar.component';

describe('DocTopbarComponent', () => {
  let component: DocTopbarComponent;
  let fixture: ComponentFixture<DocTopbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocTopbarComponent]
    });
    fixture = TestBed.createComponent(DocTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
