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

}
