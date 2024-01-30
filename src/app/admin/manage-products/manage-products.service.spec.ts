import { TestBed } from '@angular/core/testing';

import { ManageProductsService } from './manage-products.service';
import { InjectionToken } from '@angular/core';
import { ApiService } from '../../core/api.service';

describe('ManageProductsService', () => {
  let service: ManageProductsService;
  let injectionTokenSpy;

  beforeEach(() => {
    injectionTokenSpy = {
      get: () => {},
    };

    TestBed.configureTestingModule({
      providers: [
        ManageProductsService,
        ApiService,
        { provide: InjectionToken, useValue: injectionTokenSpy },
      ],
    });
    service = TestBed.inject(ManageProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
