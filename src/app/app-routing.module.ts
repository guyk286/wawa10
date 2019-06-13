import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test/test1/test1.component';
import { LoginComponent } from './common/components/login/login.component';
import { ContactComponent } from './common/components/contact/contact.component';
import { ComiteCompositionComponent } from './club/comite/comite-composition/comite-composition.component';
import { ComiteOrganisationComponent } from './club/comite/comite-organisation/comite-organisation.component';
import { HomeComponent } from './home/home.component';
import { LocauxComponent } from './club/locaux/locaux.component';
import { MembresRoutes } from './modules/membres/membres-routes';


const routes: Routes = [
  { path: 'test1', component: Test1Component },

  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },

  // Comité
  { path: 'comite/composition', component: ComiteCompositionComponent },
  { path: 'comite/organisation', component: ComiteOrganisationComponent },

  // Club
  { path: 'club/locaux', component: LocauxComponent },

  ...MembresRoutes,

  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
