import { TestBed } from '@angular/core/testing';

import { ModelProceneService } from './model-procene.service';

describe('ModelProceneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelProceneService = TestBed.get(ModelProceneService);
    expect(service).toBeTruthy();
  });
});
