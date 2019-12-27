import { Component, OnInit } from '@angular/core';
import { ApiserverService } from '../apiserver.service'
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  app: any = [];
  constructor(private api: ApiserverService) { }

  ngOnInit() {
    this.getdata();
  }
  getdata() {

    this.api.getData().subscribe(data => {

      this.app = data;

    })
  }
  // getrolelist(event) {
  //   console.log(event);
  //   const newVal = event.target.value;
  //   console.log(newVal);
  //   this.api.getDataById(newVal).subscribe(data => {
  //     console.log(data);
  //   })
  // }
}
