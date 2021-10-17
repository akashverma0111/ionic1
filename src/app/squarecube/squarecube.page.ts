import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squarecube',
  templateUrl: './squarecube.page.html',
  styleUrls: ['./squarecube.page.scss'],
})
export class SquarecubePage implements OnInit {
  num: any;

  constructor() { }

  ngOnInit() {
  }

  squareroot(){
    alert(Math.sqrt(this.num));
  }

  cuberoot(){
    alert(Math.cbrt(this.num));
  }

  square(){
    alert((this.num * this.num));
  }

  cube(){
    alert(this.num * this.num * this.num);
  }

}
