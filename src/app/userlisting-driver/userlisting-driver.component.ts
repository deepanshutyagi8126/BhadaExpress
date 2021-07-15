import { Component, OnInit } from '@angular/core';
declare function uploader():any;
@Component({
  selector: 'app-userlisting-driver',
  templateUrl: './userlisting-driver.component.html',
  styleUrls: ['./userlisting-driver.component.css']
})
export class UserlistingDriverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    uploader();
  }

}
