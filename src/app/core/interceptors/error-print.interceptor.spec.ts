import { TestBed } from '@angular/core/testing';

import { ErrorPrintInterceptor } from './error-print.interceptor';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorPrintInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ErrorPrintInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: ErrorPrintInterceptor = TestBed.inject(
      ErrorPrintInterceptor
    );

    expect(interceptor).toBeTruthy();
  });
});
