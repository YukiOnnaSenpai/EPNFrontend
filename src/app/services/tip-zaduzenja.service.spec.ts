import { TestBed } from '@angular/core/testing';

import { TipZaduzenjaService } from './tip-zaduzenja.service';

describe('TipZaduzenjaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipZaduzenjaService = TestBed.get(TipZaduzenjaService);
    expect(service).toBeTruthy();
  });
});
