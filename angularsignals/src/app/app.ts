import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Computedsignal } from './computedsignal/computedsignal';
import { Angulareffect } from './angulareffect/angulareffect';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Computedsignal,Angulareffect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count=signal(0)


  Increment(){
    this.count.update(v=>v+1)
  }

  Decrement(){
    this.count.update(v=>v-1)
  }

  Reset(){
    this.count.set(0)
  }
}
