import { TestBed } from '@angular/core/testing';

import { ZaduzenjeZemService } from './zaduzenje-zem.service';

describe('ZaduzenjeZemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZaduzenjeZemService = TestBed.get(ZaduzenjeZemService);
    expect(service).toBeTruthy();
  });
});
