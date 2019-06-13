import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from 'ng-uikit-pro-standard';
import { UserItf } from '../../common/model/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav: SidenavComponent;

  user: UserItf;
  userEventsSubscription: Subscription;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() 
  {
    this.userEventsSubscription = this.authService.userEvents.subscribe(user => this.user = user);
  }

  onLogout(event)
  {
    event.preventDefault();
    this.authService.logout()
      .subscribe(
          res=> { 
            console.log('user logout ok: '+ JSON.stringify(res) ); 
            this.navigateHome();
            // this.messageService.emitMessage('success', 'Logged out');
            // this.closeTournoi();
          },
          err=> console.log('user logout fails '+JSON.stringify(err) )
      );
  }

  navigateHome()
  {
    this.router.navigate(['']);
  }

  // COMITE 
  onComiteComposition()
  {
    this.sidenav.hide();
    this.router.navigate(['comite', 'composition']);
  }

  onComiteOrganisation()
  {
    this.sidenav.hide();
    this.router.navigate(['comite', 'organisation']);
  }

    onTest1()
  {
    this.sidenav.hide();
    this.router.navigate(['test1']);
  }

  onMembresListe()
  {
    this.sidenav.hide();
    this.router.navigate(['membres', 'liste']);
  }
}
