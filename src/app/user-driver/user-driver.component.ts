import { Component, OnInit } from '@angular/core';
declare function uploader():any;
@Component({
  selector: 'app-user-driver',
  templateUrl: './user-driver.component.html',
  styleUrls: ['./user-driver.component.css']
})
export class UserDriverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  uploader();
  }

}
 