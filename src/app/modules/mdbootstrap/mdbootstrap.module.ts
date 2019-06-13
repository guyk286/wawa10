import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// MDB Angular Pro
// import { SidenavModule, NavbarModule, WavesModule, AccordionModule } from 'ng-uikit-pro-standard';
import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';

@NgModule({
  
  exports: [
    MDBBootstrapModulesPro,
    // SidenavModule, NavbarModule, WavesModule, AccordionModule
  ],
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  declarations: [],
  
  providers: [
    MDBSpinningPreloader
  ],
  
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class MdbootstrapModule { }
