import { TestBed } from '@angular/core/testing';

import { ShowPizzaService } from './show-pizza.service';

describe('ShowPizzaService', () => {
  let service: ShowPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
