import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
