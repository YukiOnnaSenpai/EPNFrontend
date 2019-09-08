import { TestBed } from '@angular/core/testing';

import { VrednostZemService } from './vrednost-zem.service';

describe('VrednostZemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VrednostZemService = TestBed.get(VrednostZemService);
    expect(service).toBeTruthy();
  });
});
