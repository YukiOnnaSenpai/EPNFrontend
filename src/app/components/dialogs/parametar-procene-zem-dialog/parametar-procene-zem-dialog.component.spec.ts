import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametarProceneZemDialogComponent } from './parametar-procene-zem-dialog.component';

describe('ParametarProceneZemDialogComponent', () => {
  let component: ParametarProceneZemDialogComponent;
  let fixture: ComponentFixture<ParametarProceneZemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametarProceneZemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametarProceneZemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
