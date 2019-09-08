import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatastarskaOpstinaDialogComponent } from './katastarska-opstina-dialog.component';

describe('KatastarskaOpstinaDialogComponent', () => {
  let component: KatastarskaOpstinaDialogComponent;
  let fixture: ComponentFixture<KatastarskaOpstinaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatastarskaOpstinaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatastarskaOpstinaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
