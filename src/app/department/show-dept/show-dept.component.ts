import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit {

  DepartmentList:any=[];
  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  //variables for custom filter
  DepartmentIdFilter:string = "";
  DepartmentNameFilter:string ="";
  DepartmentListWithoutilter:any=[];

  constructor(private service:SharedService) { }

  //this is the first method to be invoked on mounting the component
  ngOnInit(): void {
    this.refreshDeptList();
  }

  refreshDeptList(){
    this.service.getDept().subscribe(data=>{
      this.DepartmentList=data;
      this.DepartmentListWithoutilter=data;
    });
  }

  addClick(){
    this.dep={
      id:0,
      departmentName:""
    }

    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;
  }

  editClick(item){
    this.dep=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure you want to delete this item?')){
      this.service.deleteDept(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshDeptList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDeptList()
  }

  FilterFn(){
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.DepartmentList = this.DepartmentListWithoutilter.filter(function(el){
      return el.id.toString().toLowerCase().includes(
        DepartmentIdFilter.toString().trim().toLowerCase()
      )&&
      el.departmentName.toString().toLowerCase().includes(
        DepartmentNameFilter.toString().trim().toLowerCase()
      )
    });
  }

}
