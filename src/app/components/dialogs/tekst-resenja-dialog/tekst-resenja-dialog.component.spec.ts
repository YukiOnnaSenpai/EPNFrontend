import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TekstResenjaDialogComponent } from './tekst-resenja-dialog.component';

describe('TekstResenjaDialogComponent', () => {
  let component: TekstResenjaDialogComponent;
  let fixture: ComponentFixture<TekstResenjaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekstResenjaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekstResenjaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
