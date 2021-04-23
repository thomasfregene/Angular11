import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly API_URL = 'https://localhost:44308/api'
  constructor(private http:HttpClient) { }

  getDept():Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URL}/department`);
  }

  addDept(val:any){
    return this.http.post(`${this.API_URL}/department`, val);
  }

  updateDept(val:any){
    return this.http.put(`${this.API_URL}/department/`, val);
  }

  deleteDept(val:any){
    return this.http.delete(`${this.API_URL}/department/${val}`);
  }

  //employee
  getEmployee():Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URL}/employee`);
  }

  addEmployee(val:any){
    return this.http.post(`${this.API_URL}/employee`, val);
  }

  updateEmployee(val:any){
    return this.http.put(`${this.API_URL}/employee`, val);
  }

  deleteEmployee(val:any){
    return this.http.delete(`${this.API_URL}/employee/${val}`);
  }
}
