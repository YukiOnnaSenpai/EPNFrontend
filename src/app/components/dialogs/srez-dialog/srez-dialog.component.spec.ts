import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrezDialogComponent } from './srez-dialog.component';

describe('SrezDialogComponent', () => {
  let component: SrezDialogComponent;
  let fixture: ComponentFixture<SrezDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrezDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrezDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
