import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocNotesComponent } from './doc-notes.component';

describe('DocNotesComponent', () => {
  let component: DocNotesComponent;
  let fixture: ComponentFixture<DocNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocNotesComponent]
    });
    fixture = TestBed.createComponent(DocNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
