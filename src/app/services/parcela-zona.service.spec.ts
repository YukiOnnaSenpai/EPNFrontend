import { TestBed } from '@angular/core/testing';

import { ParcelaZonaService } from './parcela-zona.service';

describe('ParcelaZonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParcelaZonaService = TestBed.get(ParcelaZonaService);
    expect(service).toBeTruthy();
  });
});
