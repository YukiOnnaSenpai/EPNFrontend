import { TestBed } from '@angular/core/testing';

import { TekstResenjaService } from './tekst-resenja.service';

describe('TekstResenjaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TekstResenjaService = TestBed.get(TekstResenjaService);
    expect(service).toBeTruthy();
  });
});
