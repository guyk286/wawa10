import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';

import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastMessageService, ToastMessage } from './common/services/toast-message.service';

import { MessageService as PrimengMessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PrimengMessageService]
})
export class AppComponent implements OnInit, OnDestroy
{
  title = 'Liwa Site 2';

  
  toastMessageEventsSubscription: Subscription;
  
  constructor(
    private appService: AppService,
    private deviceService: DeviceDetectorService,
    private primengMessageService: PrimengMessageService,
    private router: Router, 
    private toastMessageService: ToastMessageService,
  ) {}

  ngOnInit(): void
  {
    this.toastMessageEventsSubscription = this.toastMessageService.toastMessageEvents
      .subscribe( (toastMessage: ToastMessage) => this.primengMessageService.add( toastMessage) );

    console.log('browser:',this.deviceService.browser);
    this.router.navigate(['default']);
  }

  ngOnDestroy() 
  {
    if (this.toastMessageEventsSubscription) 
    {
      this.toastMessageEventsSubscription.unsubscribe();
    }
  }

 
}
