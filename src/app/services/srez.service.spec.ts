import { TestBed } from '@angular/core/testing';

import { SrezService } from './srez.service';

describe('SrezService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrezService = TestBed.get(SrezService);
    expect(service).toBeTruthy();
  });
});
