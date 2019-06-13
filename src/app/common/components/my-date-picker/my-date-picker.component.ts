import { Component, OnInit, forwardRef, Input } from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import * as _moment from 'moment';
// import {default as _rollupMoment} from 'moment';
const moment = /*_rollupMoment ||*/  _moment;

@Component({
  selector: 'app-my-date-picker',
  templateUrl: './my-date-picker.component.html',
  styleUrls: ['./my-date-picker.component.scss'],
    providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyDatePickerComponent),
      multi: true
    }
  ]
})
export class MyDatePickerComponent implements OnInit, ControlValueAccessor 
{

  @Input()
  _dateValue; // notice the '_'

  @Input() title: string;

  @Input() hint: string;
  
  constructor() 
  {
      moment.locale('fr');
   }

  ngOnInit() {
  }


  get dateValue() {
    return moment(this._dateValue, 'YYYY/MM/DD HH:mm:ss');
  }

  set dateValue(val) {
    this._dateValue = moment(val).format('YYYY/MM/DD HH:mm:ss');
    this.propagateChange(this._dateValue);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    this.dateValue = moment(event.value, 'YYYY/MM/DD HH:mm:ss');
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.dateValue = moment(value, 'YYYY/MM/DD HH:mm:ss');
    }
  }
  propagateChange = (_: any) => { };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }
}
