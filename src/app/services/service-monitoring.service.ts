import {Injectable} from '@angular/core';
import {ServiceInf} from '../interfaces/ServiceInf';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceMonitoringService {

  serviceInf: ServiceInf[] = [
    {serviceName: 'Northbound Service', status: 'Running'},
    {serviceName: 'Alarm Manager Service', status: 'Suspended'},
    {serviceName: 'Optical Service Manager', status: 'Suspended'},
    {serviceName: 'Topology Manager Service', status: 'Suspended'},
    {serviceName: 'Southbound Service', status: 'Running'}

  ];

  constructor() {
  }


  getService(): Observable<ServiceInf[]> {
    return of(this.serviceInf);
  }


}
