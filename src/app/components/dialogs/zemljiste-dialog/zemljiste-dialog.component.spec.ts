import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZemljisteDialogComponent } from './zemljiste-dialog.component';

describe('ZemljisteDialogComponent', () => {
  let component: ZemljisteDialogComponent;
  let fixture: ComponentFixture<ZemljisteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZemljisteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZemljisteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
