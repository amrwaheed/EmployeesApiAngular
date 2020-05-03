import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmoployeesComponent } from './features/emoployees/emoployees.component';
import { CreateEmployeeComponent } from './features/create-employee/create-employee.component';


const routes: Routes = [
  { path: "", redirectTo: "employees", pathMatch: 'full' },
  { path: "employees", component: EmoployeesComponent },
  { path: "create", component: CreateEmployeeComponent },
  { path: "employees/:id/edit", component: CreateEmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
