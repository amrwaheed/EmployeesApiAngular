import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmplyeesRoutingModule } from './emplyees-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmoployeesComponent } from './emoployees/emoployees.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    CreateEmployeeComponent,
    EmoployeesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmplyeesRoutingModule,
    MDBBootstrapModule.forRoot(),
   
  ]
})
export class EmplyeesModule { }
