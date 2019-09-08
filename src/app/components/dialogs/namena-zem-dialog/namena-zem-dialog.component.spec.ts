import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamenaZemDialogComponent } from './namena-zem-dialog.component';

describe('NamenaZemDialogComponent', () => {
  let component: NamenaZemDialogComponent;
  let fixture: ComponentFixture<NamenaZemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamenaZemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamenaZemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
