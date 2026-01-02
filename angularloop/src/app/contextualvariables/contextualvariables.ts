import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contextualvariables',
  standalone: true,
  imports: [CommonModule],   // CommonModule gives *ngFor, *ngIf etc.
  template: `
    <h2>Angular For Loop Contextual Variables Example</h2>

    <div *ngFor="let item of fruits; let i = index; let first = first; let last = last; let odd = odd; let even = even; let idx = index">
      <div
        [style.background]="even ? '#f0f0f0' : '#d1f7c4'"
        style="padding:8px; margin:5px; border-radius:8px"
      >
        <strong>{{ item }}</strong><br />
        Index: {{ i }} |
        Count: {{ fruits.length }} |
        First: {{ first }} |
        Last: {{ last }} |
        Odd: {{ odd }} |
        Even: {{ even }}
      </div>
    </div>

    <!-- empty block -->
    <div *ngIf="fruits.length === 0">
      <p>No fruits available 🍎</p>
    </div>
  `
})
export class Contextualvariables {
  fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
}
