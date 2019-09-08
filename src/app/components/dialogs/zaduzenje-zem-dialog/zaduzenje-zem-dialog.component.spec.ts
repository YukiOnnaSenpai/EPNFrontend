import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaduzenjeZemDialogComponent } from './zaduzenje-zem-dialog.component';

describe('ZaduzenjeZemDialogComponent', () => {
  let component: ZaduzenjeZemDialogComponent;
  let fixture: ComponentFixture<ZaduzenjeZemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaduzenjeZemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaduzenjeZemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
