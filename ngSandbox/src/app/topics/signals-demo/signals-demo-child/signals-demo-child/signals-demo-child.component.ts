import {ChangeDetectionStrategy, Component, Input, Signal} from '@angular/core';

@Component({
  selector: 'app-signals-demo-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Count: {{ count() }}
  `,
})
export class SignalsDemoChildComponent {
  @Input() count!: Signal<number>;
}
