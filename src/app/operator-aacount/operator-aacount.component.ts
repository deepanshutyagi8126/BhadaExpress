import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare function uploader():any;
@Component({
  selector: 'app-operator-aacount',
  templateUrl: './operator-aacount.component.html',
  styleUrls: ['./operator-aacount.component.css']
})
export class OperatorAacountComponent implements OnInit {
  customOptionspt: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:25,
    center:true,
    autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
    navSpeed: 700,
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
    nav: false
  }
  constructor() { }

  ngOnInit(): void {
    uploader();
  }

}
