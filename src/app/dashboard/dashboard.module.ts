import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChildCustomerComponent } from './child-customer/child-customer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { EmployeesComponent } from './employees/employees.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    DashboardComponent,
    CustomerComponent,
    ChildCustomerComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTableModule

  ]
})
export class DashboardModule { }
