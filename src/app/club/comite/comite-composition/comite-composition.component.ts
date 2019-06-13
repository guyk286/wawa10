import { Component, OnInit } from '@angular/core';
import { MembreModel } from '../../../common/model/membre.model';
import { ComiteService } from '../../../comite/services/comite.service';

@Component({
  selector: 'app-comite-composition',
  templateUrl: './comite-composition.component.html',
  styleUrls: ['./comite-composition.component.scss']
})
export class ComiteCompositionComponent implements OnInit 
{

  loading=true;
  membres: Array<MembreModel>=null; 

  constructor(
    public comiteService: ComiteService
  ) { }

  ngOnInit() 
  {
    this.loading=true;
    this.comiteService.getMembresComite()
      .subscribe(
        res => {
          this.membres=res;
          console.log( JSON.stringify(res) ); 
        },
        err => console.error( JSON.stringify(err)),
        ()=>this.loading=false
      );
  }

  countMembres():number
  {
    if(this.loading)
    {
      return 0;
    }

    if( this.membres!=null)
    {
      return this.membres.length;
    }
    return 0;
  }

  boite(membre: MembreModel): string
  {
    if(membre && membre.boite)
    {
      return ', '+membre.boite;
    }
    return '';
  }

  hasPhoto(membre: MembreModel): boolean
  {
    // console.log(membre.photo);

    if(membre && membre.photo && membre.photo.length>0)
    {
        return true;
    }
    return false;
  }
  getPhotoURL(membre: MembreModel): string
  {
    const publicDir='./public/assets/img/membres/';
    const membrePhoto=publicDir+membre.photo;
    // console.log('photo url:'+membre.photo);
    return membrePhoto;
  }
}
