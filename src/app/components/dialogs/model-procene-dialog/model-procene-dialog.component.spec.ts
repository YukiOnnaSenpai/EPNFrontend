import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelProceneDialogComponent } from './model-procene-dialog.component';

describe('ModelProceneDialogComponent', () => {
  let component: ModelProceneDialogComponent;
  let fixture: ComponentFixture<ModelProceneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelProceneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelProceneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
