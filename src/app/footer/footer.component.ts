import { EnvService } from '../common/services/env.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  angular_version='';
  app_version='';
  
  constructor(
    private envService: EnvService
  ) 
  { }

  ngOnInit() 
  {
    this.angular_version=this.envService.getConfigAsString('angular_version');
    this.app_version=this.envService.getConfigAsString('app_version');
  }

}
