import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementProceneZemDialogComponent } from './element-procene-zem-dialog.component';

describe('ElementProceneZemDialogComponent', () => {
  let component: ElementProceneZemDialogComponent;
  let fixture: ComponentFixture<ElementProceneZemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementProceneZemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementProceneZemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
