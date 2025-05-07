import {Routes} from '@angular/router';
import {SignalsDemoComponent} from './topics/signals-demo/signals-demo.component';
import {ParentComponent} from './topics/change-detection/parent.component';
import {NgContentPageComponent} from './topics/ng-content/ng-content-page/ng-content-page.component';

export const routes: Routes = [
  {path: 'signals', component: SignalsDemoComponent},
  {path: 'cdr', component: ParentComponent},
  {path: 'ng-content', component: NgContentPageComponent},
  {path: '', redirectTo: '/signals', pathMatch: 'full'}
];
