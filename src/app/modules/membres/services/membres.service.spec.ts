import { TestBed, inject } from '@angular/core/testing';

import { MembresService } from './membres.service';

describe('MembresServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembresService]
    });
  });

  it('should be created', inject([MembresService], (service: MembresService) => {
    expect(service).toBeTruthy();
  }));
});
