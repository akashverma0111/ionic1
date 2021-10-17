import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simplification',
  templateUrl: './simplification.page.html',
  styleUrls: ['./simplification.page.scss'],
})
export class SimplificationPage implements OnInit {
  num: any;

  constructor() { }

  ngOnInit() {
  }

solve(){
  alert(eval(this.num));
}
}
