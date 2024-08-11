import { TestBed } from '@angular/core/testing';

import { NamSvsService } from './nam-svs.service';

describe('NamSvsService', () => {
  let service: NamSvsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamSvsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
