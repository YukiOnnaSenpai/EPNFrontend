import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RataZemDialogComponent } from './rata-zem-dialog.component';

describe('RataZemDialogComponent', () => {
  let component: RataZemDialogComponent;
  let fixture: ComponentFixture<RataZemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RataZemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RataZemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
