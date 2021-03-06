import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ServiceMonitoringComponent} from './components/service-monitoring/service-monitoring.component';
import {LogManagementComponent} from './components/log-management/log-management.component';
import {MatCardModule} from '@angular/material/card';
import {PanelComponent} from './components/panel/panel.component';
import {DashboardCardComponent} from './components/dashboard-card/dashboard-card.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExpansionsComponent } from './components/expansions/expansions.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    DashboardComponent,
    ServiceMonitoringComponent,
    LogManagementComponent,
    PanelComponent,
    DashboardCardComponent,
    ExpansionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
