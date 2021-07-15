import { Component, OnInit } from '@angular/core';
declare var $:any;
declare function scrollall():any;
declare function dropdown1():any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    scrollall();
    dropdown1();
  }

}
