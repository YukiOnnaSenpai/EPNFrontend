import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementProceneZemComponent } from './element-procene-zem.component';

describe('ElementProceneZemComponent', () => {
  let component: ElementProceneZemComponent;
  let fixture: ComponentFixture<ElementProceneZemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementProceneZemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementProceneZemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
