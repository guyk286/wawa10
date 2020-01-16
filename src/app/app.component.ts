import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Liwa Site 2';

  message: string = null;

  constructor(
    private appService: AppService
  ) {}

  onSayHello(): void
  {
    // this.message='hello';

    this.appService.getHelloMessage()
      .subscribe(
        message => this.message = message
         ,
         err => console.error('Error getting backend message!', err)
      );
  }
}
