import { TestBed, inject } from '@angular/core/testing';

import { LunaService } from './luna.service';

describe('LunaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LunaService]
    });
  });

  it('should be created', inject([LunaService], (service: LunaService) => {
    expect(service).toBeTruthy();
  }));
});
