import { Component, OnInit } from '@angular/core';
declare function checkClicker():any;
@Component({
  selector: 'app-app-features',
  templateUrl: './app-features.component.html',
  styleUrls: ['./app-features.component.css']
})
export class AppFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    checkClicker();
    
  }

}
