import { TestBed } from '@angular/core/testing';

import { LeaguesApiService } from './leagues-api.service';

describe('LeaguesApiService', () => {
  let service: LeaguesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaguesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
