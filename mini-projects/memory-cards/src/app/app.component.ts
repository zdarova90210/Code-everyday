import {Component} from '@angular/core';
import {CardComponent} from './compponents/card/card.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  values = ['😍', '💖', '😎', '😻', '🥸', '🐈', '🐈', '😍', '💖', '😻', '😎', '🥸'];
}
