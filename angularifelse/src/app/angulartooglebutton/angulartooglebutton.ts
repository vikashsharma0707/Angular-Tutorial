import { Component } from '@angular/core';

@Component({
  selector: 'app-angulartooglebutton',
  imports: [],
  templateUrl: './angulartooglebutton.html',
  styleUrl: './angulartooglebutton.css'
})
export class Angulartooglebutton {
isVisible = false;  // Initial hide
  buttonText = 'Show Content';  // Dynamic button text

  toggleContent() {
    this.isVisible = !this.isVisible;
    this.buttonText = this.isVisible ? 'Hide Content' : 'Show Content';
  }
}
