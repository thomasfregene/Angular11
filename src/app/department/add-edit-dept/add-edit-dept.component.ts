import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dept',
  templateUrl: './add-edit-dept.component.html',
  styleUrls: ['./add-edit-dept.component.css']
})
export class AddEditDeptComponent implements OnInit {

  constructor(private service: SharedService) { }

  //passing prop from one component to another
  @Input() dep:any;
  id:number;
  departmentName:string;

  ngOnInit(): void {
    this.id = this.dep.id;
    this.departmentName = this.dep.departmentName;
  }

  addDepartment(){
    var val ={
      id:this.id,
      departmentName: this.departmentName
    };
    this.service.addDept(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  editDepartment(){
    var val={
      id:this.id,
      departmentName:this.departmentName
    };
    this.service.updateDept(val).subscribe(res=>{
      alert(res.toString());
    })
  }

 
}
