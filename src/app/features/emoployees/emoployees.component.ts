import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/_services/employees.service';
import { Employees } from 'src/app/_modules/employees';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emoployees',
  templateUrl: './emoployees.component.html',
  styleUrls: ['./emoployees.component.scss']
})
export class EmoployeesComponent implements OnInit {
  private employees :Employees [] =[]
  isLoading:boolean = false;
  private employeesSub:Subscription;

  constructor(
    private emoployeesService: EmployeesService,
    private toastr: ToastrService
    

  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.employeesSub = this.emoployeesService.get_all_employees()
      .subscribe(
        data =>{
          this.employees = data
          this.isLoading = false;
        },
        error => console.log(error)
    )
   
  }


  onDelete(id:number,index:number){
   this.emoployeesService.delete_employee(+id).subscribe(
     ()=>{
      console.log("delete")
      this.employees.splice(index,1)
      this.toastr.error('Delete Row Successfully!', 'Delete');
     }
   )
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.employeesSub.unsubscribe();
  }
}
