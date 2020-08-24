import { TestBed } from '@angular/core/testing';

import { ServiceMonitoringService } from './service-monitoring.service';

describe('ServiceMonitoringService', () => {
  let service: ServiceMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
