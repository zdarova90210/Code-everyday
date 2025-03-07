import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';

@Component({
  template: `
    <button (click)="setTo1()">Set to 1</button>
    <button (click)="incrementBy1()">Increment by 1</button>
    <br> <br>
    Counter: {{ counter() }}
    <br> <br>
    Computed: {{ computedCount() }}
  `,
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsDemoComponent {
  public counter = signal(0);
  public computedCount = computed(() => this.counter() * 10);

  public setTo1() {
    this.counter.set(1);
  }

  public incrementBy1(): void {
    this.counter.update(v => v + 1);
  }
}
