import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  message:string =""
  inputValue:string=""
  boxColor:string="lightgray"


  handleClick(){
this.message="button clicked"
  }

 handleInput(event: any) {
    this.inputValue = event.target.value;
  }


    // Mouse Events
  handleMouseEnter() {
    this.boxColor = 'lightgreen';
    this.message = 'Mouse is inside the box 🐭';
  }

  handleMouseLeave() {
    this.boxColor = 'lightgray';
    this.message = 'Mouse left the box 🚪';
  }

  // Focus & Blur Events
  handleFocus() {
    this.message = 'Input is focused 🔍';
  }

  handleBlur() {
    this.message = 'Input lost focus ❌';
  }

}
