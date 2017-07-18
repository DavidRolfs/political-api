import { TestBed, inject } from '@angular/core/testing';

import { BillSaveService } from './bill-save.service';

describe('BillSaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillSaveService]
    });
  });

  it('should ...', inject([BillSaveService], (service: BillSaveService) => {
    expect(service).toBeTruthy();
  }));
});
