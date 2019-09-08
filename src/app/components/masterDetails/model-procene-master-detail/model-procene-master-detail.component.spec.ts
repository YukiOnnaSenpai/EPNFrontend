import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelProceneMasterDetailComponent } from './model-procene-master-detail.component';

describe('ModelProceneMasterDetailComponent', () => {
  let component: ModelProceneMasterDetailComponent;
  let fixture: ComponentFixture<ModelProceneMasterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelProceneMasterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelProceneMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
