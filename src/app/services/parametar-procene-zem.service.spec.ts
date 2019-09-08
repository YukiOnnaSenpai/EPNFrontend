import { TestBed } from '@angular/core/testing';

import { ParametarProceneZemService } from './parametar-procene-zem.service';

describe('ParametarProceneZemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParametarProceneZemService = TestBed.get(ParametarProceneZemService);
    expect(service).toBeTruthy();
  });
});
