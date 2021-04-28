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
    PhotoFileName:string;
    PhotoFilePath:string;
    DateOfJoining:Date

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

  addEmployee(){
    var val ={
      id: this.Emp.id,
      firstName: this.firstName,
      lastName: this.lastName,
      department: this.department
    };
    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  editEmployee(){
    var val ={
      id: this.Emp.id,
      firstName: this.firstName,
      lastName: this.lastName,
      department: this.department,
      DateOfJoining: this.DateOfJoining
    };
    this.service.updateEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  uploadPhoto(event){
    var file = event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadeFile',file,file.name);

    //sending formData to API
    //not yet implemented
    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }

}
