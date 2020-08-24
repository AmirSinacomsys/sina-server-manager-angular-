import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ServiceMonitoringService} from '../../services/service-monitoring.service';
import {ServiceInf} from '../../interfaces/ServiceInf';

@Component({
  selector: 'app-expansions',
  templateUrl: './expansions.component.html',
  styleUrls: ['./expansions.component.css']
})
export class ExpansionsComponent implements OnInit {
  panelOpenState = false;
  @Input() title1: string;
  @Input() title2: string;
  @Input() title3: string;

  @Output() click: EventEmitter<ServiceInf> = new EventEmitter<ServiceInf>();

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


  public onClick(service: ServiceInf) {
    this.click.emit(service);
  }

}
