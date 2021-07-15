import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare function uploader():any;
declare function Active():any;
declare function scrolled():any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["<img src='assets/imgs/leftarrow.svg'>","<img src='assets/imgs/rightarrow.svg'>"],
    responsive: {
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

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
  customOptions4: OwlOptions = {
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
  customOptionspt: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    margin:25,
    center:true,
    smartSpeed: 1000,
    autoplay:true,
        autoplayTimeout: 1000,
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
  customOptions7: OwlOptions = {
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
    uploader();
    Active();
    scrolled();
  }

}
