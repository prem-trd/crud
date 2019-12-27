import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { Employee } from '../../model/employee.model';



const headerOption={
  headers:new HttpHeaders({ 'content-Type':'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
mockUrl = 'http://localhost:3000/employee';

currentEmployee:Employee = {
  id:null,
  firstName: null,
  lastName: null,
  designation: null,
  contact: null,
  address: null,
}

  
constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.mockUrl, headerOption);
  }

  deleteEmployee(id:number): Observable<Employee> {
return this.http.delete<Employee>(this.mockUrl + "/" + id, headerOption);
  }
updateEmployee(emp):Observable<Employee>{
  return this.http.put<Employee>(this.mockUrl + '/' + emp.id , emp, headerOption);
}

}
