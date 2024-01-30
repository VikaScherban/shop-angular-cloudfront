import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
