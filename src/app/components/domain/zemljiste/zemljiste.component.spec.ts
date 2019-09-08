import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZemljisteComponent } from './zemljiste.component';

describe('ZemljisteComponent', () => {
  let component: ZemljisteComponent;
  let fixture: ComponentFixture<ZemljisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZemljisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZemljisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
