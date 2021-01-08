import { TestBed } from '@angular/core/testing';

import { BotMainService } from './bot-main.service';

describe('BotMainService', () => {
  let service: BotMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
