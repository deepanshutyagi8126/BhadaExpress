import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-vehicleslider',
  templateUrl: './vehicleslider.component.html',
  styleUrls: ['./vehicleslider.component.css']
})
export class VehiclesliderComponent implements OnInit {
  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    // margin:10,
    navSpeed: 700,
    navText: ["<img src='assets/imgs/left.svg'>","<img src='assets/imgs/right.svg'>"],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
