import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-computedsignal',
  standalone: true,  // ✅ अगर standalone component है तो यह ज़रूरी है
  templateUrl: './computedsignal.html',
  styleUrls: ['./computedsignal.css'] // ✅ "styleUrls" (plural) होना चाहिए
})
export class Computedsignal {
  // Signal
  count = signal(0);

  // Computed Signal (Derived Value)
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(v => v + 1);
  }
}
