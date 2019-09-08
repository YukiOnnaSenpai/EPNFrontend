import { TestBed } from '@angular/core/testing';

import { OsobinaModelaService } from './osobina-modela.service';

describe('OsobinaModelaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsobinaModelaService = TestBed.get(OsobinaModelaService);
    expect(service).toBeTruthy();
  });
});
