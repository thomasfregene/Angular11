import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  EmployeeList:any=[];
  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  Emp:any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmployee().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

  addClick(){
    this.Emp={
      id:0,
      firstName:"",
      lastName:"",
      phoneNumber:"",
      email:"",
      address:""
    }

    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }

  editClick(item){
    this.Emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure you want to delete this item?')){
      this.service.deleteEmployee(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

}
