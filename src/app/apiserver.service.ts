import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserverService {

  constructor(private http: HttpClient) { }
  mockUrl = "https://jsonplaceholder.typicode.com/todos/"

  public getData() {
    console.log('hi service')
    return this.http.get(this.mockUrl);
  }
getDataById(id:any){
  return this.http.get(this.mockUrl+id);
}
}
