import {Component} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  standalone: true,
  imports: [
    ChildComponent
  ],
})
export class ParentComponent {
  counter = 0;

  increment() {
    this.counter++;
  }
}
