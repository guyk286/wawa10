import { Component, OnInit } from '@angular/core';
import { PageModel } from '../../../common/pages/model/page.model';
import { PageService } from '../../../common/pages/services/page.service';

@Component({
  selector: 'app-comite-organisation',
  templateUrl: './comite-organisation.component.html',
  styleUrls: ['./comite-organisation.component.scss']
})
export class ComiteOrganisationComponent implements OnInit {

  PAGE_KEY='comiteOrganisation';

  loading=true;
  page: PageModel=null;

  constructor(
    private pageService: PageService
  )
   { }

  ngOnInit() 
  {
    this.pageService.getPageContentByKey( this.PAGE_KEY )
      .subscribe( 
        res => this.page=res,
        err => console.error( JSON.stringify(err) ),
        () => this.loading=false
      );
  }

}
