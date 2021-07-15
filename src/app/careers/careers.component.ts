import { Component, OnInit } from '@angular/core';
declare function  uploader():any;
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    uploader();
  }

}
