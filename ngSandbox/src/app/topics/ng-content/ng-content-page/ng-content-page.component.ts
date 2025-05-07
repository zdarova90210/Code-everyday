import {Component} from '@angular/core';
import {NgContentDirectiveComponent} from '../ng-content-directive.component';

@Component({
  selector: 'app-ng-content-page',
  templateUrl: './ng-content-page.component.html',
  styleUrls: ['./ng-content-page.component.scss'],
  imports: [
    NgContentDirectiveComponent
  ],
  standalone: true
})
export class NgContentPageComponent {

}
