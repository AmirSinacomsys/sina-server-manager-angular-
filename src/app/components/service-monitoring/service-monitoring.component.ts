import {Component, OnInit} from '@angular/core';
import {ServiceInf} from '../../interfaces/ServiceInf';
import {ServiceMonitoringService} from '../../services/service-monitoring.service';

@Component({
  selector: 'app-service-monitoring',
  templateUrl: './service-monitoring.component.html',
  styleUrls: ['./service-monitoring.component.css']
})
export class ServiceMonitoringComponent implements OnInit {

  panelOpenState = false;

  constructor(private service: ServiceMonitoringService) {
  }

  servicesInf: ServiceInf[];

  ngOnInit(): void {

    this.service.getService().subscribe(
      response => {
        this.servicesInf = response;
      }
    );

  }

  public isRunning(str: string): boolean {
    if (str.toLowerCase() === 'running') {
      return true;
    } else {
      return false;
    }
  }


  activate() {
    console.log('activated clicked');
  }

  suspend() {
    console.log('suspended cliked');
  }
}
