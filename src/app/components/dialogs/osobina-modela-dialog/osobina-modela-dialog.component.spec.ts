import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobinaModelaDialogComponent } from './osobina-modela-dialog.component';

describe('OsobinaModelaDialogComponent', () => {
  let component: OsobinaModelaDialogComponent;
  let fixture: ComponentFixture<OsobinaModelaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsobinaModelaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsobinaModelaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
