import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamenaZemMasterDetailComponent } from './namena-zem-master-detail.component';

describe('NamenaZemMasterDetailComponent', () => {
  let component: NamenaZemMasterDetailComponent;
  let fixture: ComponentFixture<NamenaZemMasterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamenaZemMasterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamenaZemMasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
