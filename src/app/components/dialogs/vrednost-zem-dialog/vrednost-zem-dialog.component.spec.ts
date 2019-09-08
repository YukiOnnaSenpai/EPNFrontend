import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrednostZemDialogComponent } from './vrednost-zem-dialog.component';

describe('VrednostZemDialogComponent', () => {
  let component: VrednostZemDialogComponent;
  let fixture: ComponentFixture<VrednostZemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrednostZemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrednostZemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
