import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ServiceMonitoringComponent} from './components/service-monitoring/service-monitoring.component';
import {LogManagementComponent} from './components/log-management/log-management.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'service-monitoring', component: ServiceMonitoringComponent},
  {path: 'log-management', component: LogManagementComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
