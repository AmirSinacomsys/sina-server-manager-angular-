import {Component, OnInit} from '@angular/core';
import {ServiceInf} from '../../interfaces/ServiceInf';
import {ServiceMonitoringService} from '../../services/service-monitoring.service';

@Component({
  selector: 'app-service-monitoring',
  templateUrl: './service-monitoring.component.html',
  styleUrls: ['./service-monitoring.component.css']
})
export class ServiceMonitoringComponent implements OnInit {

  t1 = 'Service Name';

  constructor(private service: ServiceMonitoringService) {
  }


  ngOnInit(): void {


  }


  onClick(s: ServiceInf) {

    console.log(s);
  }
}
