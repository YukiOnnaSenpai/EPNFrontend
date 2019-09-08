import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoefZemComponent } from './koef-zem.component';

describe('KoefZemComponent', () => {
  let component: KoefZemComponent;
  let fixture: ComponentFixture<KoefZemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoefZemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoefZemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
