import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../module.angular.material/material.module';
import { MyDatePipe } from '../../common/pipes/my-date.pipe';
import { SafeHtmlPipe } from '../../common/pipes/safe-html.pipe';
import { MyDatePickerComponent } from '../../common/components/my-date-picker/my-date-picker.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    MyDatePipe,
    SafeHtmlPipe,
    MyDatePickerComponent
  ],
  exports: [
    MyDatePipe,
    SafeHtmlPipe,
    MyDatePickerComponent
  ]
})
export class PipesModule { }
