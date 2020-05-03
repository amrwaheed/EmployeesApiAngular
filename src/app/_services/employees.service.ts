import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable , of, Subject } from 'rxjs';

import { Employees } from '../_modules/employees';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employeesSub = new Subject<{employees: Employees[]}>()

  constructor(
    private http : HttpClient
  ) { }

  get_all_employees() :Observable<Employees[]>{
    return this.http.get<Employees[]>(environment.ApiUrl)
  }


  get_employee_by_id(id:number) : Observable<Employees> {
    return this.http.get<Employees>(environment.ApiUrl +'/'+ id)
  }
  
  create_new_employee(employee : Employees){
    return this.http.post<Employees>(environment.ApiUrl , employee)
  }

 

  delete_employee(id:number): Observable<void> {
    return this.http.delete<void>(environment.ApiUrl +'/'+ id);
  }

  update_employee(employee :Employees){
    return this.http.put<Employees>(environment.ApiUrl + '/' + employee.id , employee);
  }





}
