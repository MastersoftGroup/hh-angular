import { TestBed, inject } from '@angular/core/testing';

import { HhJsonpService } from './hh-jsonp.service';

describe('HhJsonpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HhJsonpService]
    });
  });

  it('should be created', inject([HhJsonpService], (service: HhJsonpService) => {
    expect(service).toBeTruthy();
  }));
});
