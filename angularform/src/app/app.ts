import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  username: string = '';

  // Get value (on button click)
  getValue() {
    alert(`Current Input Value: ${this.username}`);
  }

  // Set value (on button click)
  setValue() {
    this.username = 'Vikash Sharma';
  }

  // Clear the input
  clearValue() {
    this.username = '';
  }


}
