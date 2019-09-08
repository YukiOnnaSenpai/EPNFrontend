import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelaZonaDialogComponent } from './parcela-zona-dialog.component';

describe('ParcelaZonaDialogComponent', () => {
  let component: ParcelaZonaDialogComponent;
  let fixture: ComponentFixture<ParcelaZonaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelaZonaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelaZonaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
