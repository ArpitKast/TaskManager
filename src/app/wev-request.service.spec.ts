import { TestBed } from '@angular/core/testing';

import { WevRequestService } from './wev-request.service';

describe('WevRequestService', () => {
  let service: WevRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WevRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
