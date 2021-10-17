import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbersystem',
  templateUrl: './numbersystem.page.html',
  styleUrls: ['./numbersystem.page.scss'],
})
export class NumbersystemPage implements OnInit {
  num: any;

  constructor() { }

  ngOnInit() {
  }
check_even(){
  if(this.num % 2 == 0){
    alert("this number is even");
  }else{
    alert("this number is odd");
  }
}

check_prime(){
  let f=0;
  for(let i=2; i<this.num; i++){
    if(this.num % i == 0){
      f++;
      break;
    }
  }
  if(f > 0){
    alert("no, This number is not a prime number");
  }else{
    alert("yes, This number is a prime number");
  }
}

div(by){
  if(this.num % by == 0){
    alert("yes, this number is divisible by "+ by);
  }else{
    alert("no, this number is not divisible by "+ by);
  }
}

}
