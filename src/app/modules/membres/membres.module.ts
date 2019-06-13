import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembreListeComponent } from './membre-liste/membre-liste.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../module.angular.material/material.module';
import { MdbootstrapModule } from '../mdbootstrap/mdbootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule,
    MdbootstrapModule
  ],
  declarations: [MembreListeComponent]
})
export class MembresModule { }
