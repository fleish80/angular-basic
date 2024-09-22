import { TestBed } from '@angular/core/testing';

import { JokeStoreNgrxSignalsService } from './joke-store-ngrx-signals.service';

describe('JokeStoreNgrxSignalsService', () => {
  let service: JokeStoreNgrxSignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeStoreNgrxSignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
