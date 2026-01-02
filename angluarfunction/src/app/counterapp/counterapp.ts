import { Component } from '@angular/core';

@Component({
  selector: 'app-counterapp',
  imports: [],
  templateUrl: './counterapp.html',
  styleUrl: './counterapp.css'
})
export class Counterapp {

  count:number=0

  Increment(){
    this.count=this.count+1
  }

  Decrement(){
    this.count=this.count-1
  }

  Reset(){
    this.count=0
  }

}
