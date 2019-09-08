import { TestBed } from '@angular/core/testing';

import { RataZemService } from './rata-zem.service';

describe('RataZemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RataZemService = TestBed.get(RataZemService);
    expect(service).toBeTruthy();
  });
});
