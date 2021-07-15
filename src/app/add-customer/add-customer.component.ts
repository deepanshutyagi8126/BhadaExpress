import { Component, OnInit } from '@angular/core';
declare function active():any;
declare function uploader():any;
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    active();
    uploader();
  }

}
