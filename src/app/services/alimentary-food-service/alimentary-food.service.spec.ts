import { TestBed } from '@angular/core/testing';

import { AlimentaryFoodService } from './alimentary-food.service';

describe('AlimentaryFoodService', () => {
  let service: AlimentaryFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimentaryFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
