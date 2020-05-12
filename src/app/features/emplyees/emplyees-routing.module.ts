import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmoployeesComponent } from './emoployees/emoployees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


const routes: Routes = [
 
  { path: "", component: EmoployeesComponent },
  { path: "create", component: CreateEmployeeComponent },
  { path: ":id/edit", component: CreateEmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmplyeesRoutingModule { }
