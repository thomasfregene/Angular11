import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private service: SharedService) { }

    //passing prop from one component to another
    @Input() Emp:any;
    id:number;
    firstName:string;
    lastName:string;
    department: ""

    DepartmentList:any=[];

  ngOnInit(): void {
    this.id = this.Emp.id;
    this.firstName = this.Emp.firstName;
    // this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentName().subscribe((data:any)=>{
      this.DepartmentList=data;

      //declare all properties of employee
      this.id = this.Emp.id,
      this.firstName = this.Emp.firstName,
      this.lastName = this.Emp.lastName,
      this.department = this.Emp.department
    })
  }

}
