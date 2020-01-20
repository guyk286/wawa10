import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDefaultComponent } from './app-default/app-default.component';


const routes: Routes = [
  {path: 'login', redirectTo: 'auth/login'},
  {path: 'default', component: AppDefaultComponent},

  // Default routes
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: '**', redirectTo: 'default', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
