import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipZaduzenjaDialogComponent } from './tip-zaduzenja-dialog.component';

describe('TipZaduzenjaDialogComponent', () => {
  let component: TipZaduzenjaDialogComponent;
  let fixture: ComponentFixture<TipZaduzenjaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipZaduzenjaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipZaduzenjaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
