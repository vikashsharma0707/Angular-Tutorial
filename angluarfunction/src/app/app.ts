import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Datavariables } from './datavariables/datavariables';
import { Counterapp } from './counterapp/counterapp';

@Component({
  selector: 'app-root',
  imports: [Datavariables,Counterapp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showMessage(){
    alert("hello this is angular function")
  }
}
