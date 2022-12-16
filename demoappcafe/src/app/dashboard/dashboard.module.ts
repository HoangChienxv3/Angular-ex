import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarDasboardComponent } from './sidebar-dasboard/sidebar-dasboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarDasboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
