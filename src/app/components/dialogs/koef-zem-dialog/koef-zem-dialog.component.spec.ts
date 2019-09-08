import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoefZemDialogComponent } from './koef-zem-dialog.component';

describe('KoefZemDialogComponent', () => {
  let component: KoefZemDialogComponent;
  let fixture: ComponentFixture<KoefZemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoefZemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoefZemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
