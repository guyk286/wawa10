import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  title = 'Liwa Site 2';

  

  constructor(
    private appService: AppService,
    private deviceService: DeviceDetectorService,
    private router: Router, 
  ) {}

  ngOnInit(): void
  {
    console.log('browser:',this.deviceService.browser);
    this.router.navigate(['default']);
  }

 

 
}
