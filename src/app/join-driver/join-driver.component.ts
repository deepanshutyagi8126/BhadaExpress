import { Component, OnInit } from '@angular/core';
import {Ng2TelInputModule} from 'ng2-tel-input';
declare function country():any;
declare function uploader():any;
@Component({
  selector: 'app-join-driver',
  templateUrl: './join-driver.component.html',
  styleUrls: ['./join-driver.component.css']
})
export class JoinDriverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    country();
    uploader();
  }

}
