import { TestBed, inject } from '@angular/core/testing';

import { PropublicaApiService } from './propublica-api.service';

describe('PropublicaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropublicaApiService]
    });
  });

  it('should ...', inject([PropublicaApiService], (service: PropublicaApiService) => {
    expect(service).toBeTruthy();
  }));
});
