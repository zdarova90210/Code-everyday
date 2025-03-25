import {Routes} from '@angular/router';
import {SignalsDemoComponent} from './topics/signals-demo/signals-demo.component';
import {ParentComponent} from './topics/change-detection/parent.component';

export const routes: Routes = [
  {path: 'signals', component: SignalsDemoComponent},
  {path: 'cdr', component: ParentComponent},
  {path: '', redirectTo: '/signals', pathMatch: 'full'}
];
