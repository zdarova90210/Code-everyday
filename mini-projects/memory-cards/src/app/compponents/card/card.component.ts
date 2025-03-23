import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() value: string = '';

  @HostListener('click') onClick() {
    console.log('click');
  }
}
