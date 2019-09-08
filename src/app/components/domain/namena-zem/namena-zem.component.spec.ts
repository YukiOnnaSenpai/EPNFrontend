import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { NamenaZemComponent } from './namena-zem.component';

describe('NamenaZemComponent', () => {
  let component: NamenaZemComponent;
  let fixture: ComponentFixture<NamenaZemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamenaZemComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamenaZemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
