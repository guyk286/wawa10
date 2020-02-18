import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthenticatedUserModel } from '../../../auth/model/authenticated-user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  user: AuthenticatedUserModel = null;
  userEventsSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void 
  {
    this.userEventsSubscription = this.authService.userEvents.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() 
  {
    if (this.userEventsSubscription) this.userEventsSubscription.unsubscribe();
  }

  getLogoImageUrl()
  {
    return './assets/img/Logo_Liwa_2020.jpg';
    //  return './assets/img/Logo_Liwa_2020.jpg';
  }

  onLogoClicked()
  {
    this.navigateHome();
  }
  
  navigateHome()
  {
    this.router.navigate(['']);
  }

  getAuthService(): AuthService
  {
    return this.authService;
  }

  isSaisonActive(): boolean
  {
    console.warn('this method should be deleted !');
    return false;
  }

  onLogout(event)
  {
    event.preventDefault();
  }
}
