import {Routes} from '@angular/router';
import {SignalsDemoComponent} from './topics/signals-demo/signals-demo.component';

export const routes: Routes = [
  {path: 'signals', component: SignalsDemoComponent},
  {path: '', redirectTo: '/signals', pathMatch: 'full'}
];
