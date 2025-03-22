import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CardComponent} from './compponents/card/card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
}
