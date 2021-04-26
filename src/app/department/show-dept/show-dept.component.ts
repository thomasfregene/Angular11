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

  constructor(private service:SharedService) { }

  //this is the first method to be invoked on mounting the component
  ngOnInit(): void {
    this.refreshDeptList();
  }

  refreshDeptList(){
    this.service.getDept().subscribe(data=>{
      this.DepartmentList=data;
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

  

}
