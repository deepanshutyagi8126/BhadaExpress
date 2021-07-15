import { Component, OnInit } from '@angular/core';
declare function uploader():any;
@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   uploader();
  }

}
