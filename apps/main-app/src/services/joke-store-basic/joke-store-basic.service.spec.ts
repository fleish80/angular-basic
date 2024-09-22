import { TestBed } from '@angular/core/testing';

import { JokeStoreBasicService } from './joke-store-basic.service';

describe('JokeStoreBasicService', () => {
  let service: JokeStoreBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeStoreBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
