import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMonitoringComponent } from './service-monitoring.component';

describe('ServiceMonitoringComponent', () => {
  let component: ServiceMonitoringComponent;
  let fixture: ComponentFixture<ServiceMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
