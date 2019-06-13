import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform 
{

  transform(value: any, format: string = ''): string 
  {
      moment.locale('fr');
       return moment(value).isValid()? moment(value).format(format) : value; 
  }


}
