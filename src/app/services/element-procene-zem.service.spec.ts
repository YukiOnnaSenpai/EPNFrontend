import { TestBed } from '@angular/core/testing';

import { ElementProceneZemService } from './element-procene-zem.service';

describe('ElementProceneZemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementProceneZemService = TestBed.get(ElementProceneZemService);
    expect(service).toBeTruthy();
  });
});
