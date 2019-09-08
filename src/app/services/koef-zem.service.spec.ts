import { TestBed } from '@angular/core/testing';

import { KoefZemService } from './koef-zem.service';

describe('KoefZemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KoefZemService = TestBed.get(KoefZemService);
    expect(service).toBeTruthy();
  });
});
