import { TestBed } from '@angular/core/testing';

import { EmtrService } from './emtr.service';

describe('EmtrService', () => {
  let service: EmtrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmtrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
