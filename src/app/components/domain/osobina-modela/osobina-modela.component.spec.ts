import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobinaModelaComponent } from './osobina-modela.component';

describe('OsobinaModelaComponent', () => {
  let component: OsobinaModelaComponent;
  let fixture: ComponentFixture<OsobinaModelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsobinaModelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsobinaModelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
