import { NgModule } from '@angular/core';
import { MatDatepickerModule, MatCheckboxModule,
         MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,
         MatTabsModule, MatCard, MatCardModule, MatProgressSpinnerModule,
         MatMenuModule, MatButtonToggleModule
  } from '@angular/material';

import {MatTableModule, MatExpansionModule, MatSlideToggleModule,
  MAT_DIALOG_DEFAULT_OPTIONS, MatBadgeModule, MatStepperModule, MatRadioModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';

import {MatButtonModule} from '@angular/material/button';
//import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatTableModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSidenavModule,
    MatStepperModule,
    MatRadioModule
  ],

  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatTableModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatStepperModule,
    MatRadioModule
  ],

  declarations: [],

  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class MaterialModule { }
