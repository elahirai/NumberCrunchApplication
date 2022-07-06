import { TestBed } from '@angular/core/testing';

import { NumberCrunchServiceService } from './number-crunch-service.service';

describe('NumberCrunchServiceService', () => {
  let service: NumberCrunchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberCrunchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
