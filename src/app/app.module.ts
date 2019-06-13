import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MdbootstrapModule } from './modules/mdbootstrap/mdbootstrap.module';
import { Test1Component } from './test/test1/test1.component';
import { AuthService } from './common/services/auth.service';
import { LoginComponent } from './common/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactComponent } from './common/components/contact/contact.component';
import { MessageComponent } from './common/message/message.component';
import { MessageService } from './common/message/message.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgMarqueeModule } from 'ng-marquee';
import { ComiteCompositionComponent } from './club/comite/comite-composition/comite-composition.component';

import { CKEditorModule } from 'ng2-ckeditor';
import { ComiteOrganisationComponent } from './club/comite/comite-organisation/comite-organisation.component';
import { PipesModule } from './modules/pipes/pipes.module';
import { HomeComponent } from './home/home.component';
import { LocauxComponent } from './club/locaux/locaux.component';
import { MarqueeComponent } from './header/marquee/marquee.component';
import { MenuComponent } from './header/menu/menu.component';
import { MembresModule } from './modules/membres/membres.module';
import { MembresService } from './modules/membres/services/membres.service';
import { MaterialModule } from './modules/module.angular.material/material.module';
 
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    MessageComponent,
    Test1Component,
    ComiteCompositionComponent,
    ComiteOrganisationComponent,
    HomeComponent,
    LocauxComponent,
    MarqueeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MdbootstrapModule,
    NgMarqueeModule,
    NgbModule,
    PipesModule,
    ReactiveFormsModule,
    MaterialModule,

    MembresModule,
  ],
  providers: [
    AuthService,
    MembresService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
