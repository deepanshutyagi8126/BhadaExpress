import { Component, OnInit } from '@angular/core';
declare function checkClicker():any;
declare function dropdown():any;
@Component({
  selector: 'app-home-model',
  templateUrl: './home-model.component.html',
  styleUrls: ['./home-model.component.css']
})
export class HomeModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    checkClicker();
    dropdown();
  }

}
