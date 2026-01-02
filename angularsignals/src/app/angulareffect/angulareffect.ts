import { Component, signal, effect, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angulareffect',
  standalone: true,                 // required to use 'imports' in component
  imports: [CommonModule],          // CommonModule provides *ngIf, *ngFor etc.
  template: `
    <div class="container">
      <h1>🌟 Effect in Angular Demo</h1>

      <h2>Counter: {{ count() }}</h2>
      <h3>Double Value (computed): {{ doubleCount() }}</h3>

      <div class="buttons">
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
        <button (click)="toggle()">Toggle Box</button>
      </div>

      <div *ngIf="isVisible()" class="box">I am Visible 👀</div>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      padding: 30px;
      font-family: 'Poppins', sans-serif;
    }
    h1 {
      color: #007bff;
      margin-bottom: 20px;
    }
    .buttons {
      margin: 20px 0;
    }
    button {
      padding: 10px 20px;
      margin: 5px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      background: teal;
      color: white;
      transition: 0.3s;
    }
    button:hover {
      background: darkcyan;
    }
    .box {
      margin-top: 20px;
      width: 200px;
      height: 200px;
      background-color: lightgreen;
      border-radius: 10px;
      display: inline-block;
      line-height: 200px;
      font-weight: bold;
    }
  `]
})
export class Angulareffect {
  // Signals
  count = signal(0);
  isVisible = signal(true);

  // Computed (derived value)
  doubleCount = computed(() => this.count() * 2);

  // Side-effect: log whenever count or doubleCount changes
  // effect will re-run whenever it reads a signal/computed that changes
  constructor() {
    // Log count changes
    effect(() => {
      console.log('Count changed:', this.count());
    });

    // Log doubleCount changes (reads computed)
    effect(() => {
      console.log('Double Count (computed):', this.doubleCount());
    });
  }

  // Methods to update signals
  increment() {
    this.count.update(v => v + 1);
  }

  decrement() {
    this.count.update(v => v - 1);
  }

  toggle() {
    this.isVisible.update(v => !v);
  }
}
