import { Component, OnDestroy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})


export class App implements OnDestroy {
  // Signals
  counter = signal(0);
  step = signal(1);
  isRunning = signal(false);

  // store interval id (browser)
  private intervalId: ReturnType<typeof setInterval> | null = null;

  increment() {
    // update signal value
    this.counter.update(v => v + this.step());
  }

  decrement() {
    this.counter.update(v => v - this.step());
  }

  reset() {
    this.counter.set(0);
  }

  setRandom() {
    this.counter.set(Math.floor(Math.random() * 201) - 100);
  }

  toggleAuto() {
    if (this.isRunning()) {
      this.stopAuto();
    } else {
      this.startAuto();
    }
  }

  startAuto() {
    if (this.isRunning()) return;
    this.isRunning.set(true);
    this.intervalId = setInterval(() => {
      // increment by current step (read step() value)
      this.counter.update(v => v + this.step());
    }, 600);
  }

  stopAuto() {
    this.isRunning.set(false);
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // cleanup
  ngOnDestroy(): void {
    this.stopAuto();
  }
}
