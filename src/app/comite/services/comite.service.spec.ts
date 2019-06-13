import { TestBed, inject } from '@angular/core/testing';

import { ComiteService } from './comite.service';

describe('MembreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComiteService]
    });
  });

  it('should be created', inject([ComiteService], (service: ComiteService) => {
    expect(service).toBeTruthy();
  }));
});
