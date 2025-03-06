import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';

@Component({
  template: `
    <button (click)="increment()">Print signals</button>
  `,
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsDemoComponent {
  public count = signal(0);
  public computedCount = computed(() => this.count() * 10);

  public increment() {
    this.count.set(this.count() + 1);
    console.log(this.count());
    console.log(this.computedCount());
  }
}
