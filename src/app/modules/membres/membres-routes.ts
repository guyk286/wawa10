import { Route } from '@angular/router';
import { MembreListeComponent } from './membre-liste/membre-liste.component';

export const MembresRoutes: Route[] = [
  { path: 'membres/liste', component: MembreListeComponent }
];
