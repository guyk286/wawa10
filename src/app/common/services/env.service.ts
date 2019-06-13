import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  constructor() { }
  
  getConfigAsString(key: string): string
  {
    switch(key)
    {
      case 'angular_version': return environment.angular_version;
       case 'app_version': return environment.app_version;
    }
    return '<env.noop>: '+key;
  }
  
}
