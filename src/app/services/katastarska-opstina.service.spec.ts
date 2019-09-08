import { TestBed } from '@angular/core/testing';

import { KatastarskaOpstinaService } from './katastarska-opstina.service';

describe('KatastarskaOpstinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KatastarskaOpstinaService = TestBed.get(KatastarskaOpstinaService);
    expect(service).toBeTruthy();
  });
});
