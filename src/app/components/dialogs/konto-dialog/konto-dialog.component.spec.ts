import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontoDialogComponent } from './konto-dialog.component';

describe('KontoDialogComponent', () => {
  let component: KontoDialogComponent;
  let fixture: ComponentFixture<KontoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
