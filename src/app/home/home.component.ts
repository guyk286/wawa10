import { Component, OnInit } from '@angular/core';
import { PageModel } from '../common/pages/model/page.model';
import { PageService } from '../common/pages/services/page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit 
{

  PAGE_KEY='home';

  loading=true;
  editMode=false;
  page: PageModel=null;

  pageContent=null;
  pageContentReadOnly=false;


  constructor(
    private pageService: PageService
  ) { }

  ngOnInit() 
  {
    this.pageService.getPageContentByKey( this.PAGE_KEY )
      .subscribe( 
        res => {
          this.page=res;
          if(res!==null)
          {
            this.pageContent=res.content;
          }
          else
          {
            this.pageContent='';
          }
        },
        err => console.error( JSON.stringify(err) ),
        () => this.loading=false
      );
  }

  onEdit()
  {
    this.editMode=true;
  }
  
  onCancel()
  {
    this.editMode=false;
  }

  onSave()
  {
    /*
      if( this.presentationData === undefined || this.presentationData === null )
      {
          const pd: TournoiPresentationModel=this.buildTournoiPresentation();
          this.tournoiService.saveTournoiPresentation( this.tournoi, pd)
            .subscribe( 
                res => this.presentationData=res,
                err => console.error( JSON.stringify(err) ),
                () => this.loading=false
            );
      }
      else
      {
          this.collectData();
          this.tournoiService.saveTournoiPresentation( this.tournoi, this.presentationData)
            .subscribe( 
                res => this.presentationData=res,
                err => console.error( JSON.stringify(err) ),
                () => this.loading=false
            );
      }
      */

      if(  this.page===null )
      {
        this.page=new PageModel(
          /* public id: number*/ 0,
          /* public key: string*/ this.PAGE_KEY,
          /* public content: string*/ this.pageContent,
          /* public created_at: Date*/ null,
          /* public updated_at: Date*/ null
        );

      }

      this.pageService.savePage( this.page )
          .subscribe(
            res => {
              this.page=res;
              if(res!==null)
              {
                this.pageContent=res.content;
              }
              else
              {
                this.pageContent='';
              }

            },
            err => console.error( JSON.stringify(err) ),
            () => this.editMode=false
          );

  }

  isUserAdmin(): boolean
  {
    return false;
  }

}
