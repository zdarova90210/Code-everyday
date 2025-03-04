import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {SignalsDemoChildComponent} from './signals-demo-child/signals-demo-child/signals-demo-child.component';

@Component({
  template: `
    <button (click)="increment()">Click me: {{ count() }}</button>
    <hr>
    <app-signals-demo-child [count]="count"></app-signals-demo-child>
  `,
  standalone: true,
  imports: [
    SignalsDemoChildComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsDemoComponent {
  public count = signal(0);

  public increment() {
    this.count.set(this.count() + 1);
  }
}
