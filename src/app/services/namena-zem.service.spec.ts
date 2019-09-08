import { TestBed } from '@angular/core/testing';

import { NamenaZemService } from './namena-zem.service';

describe('NamenaZemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NamenaZemService = TestBed.get(NamenaZemService);
    expect(service).toBeTruthy();
  });
});
