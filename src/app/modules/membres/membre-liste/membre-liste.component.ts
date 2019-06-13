import { Component, OnInit } from '@angular/core';
import { MembreModel } from '../../../common/model/membre.model';
import { MembresService } from '../services/membres.service';

@Component({
  selector: 'app-membre-liste',
  templateUrl: './membre-liste.component.html',
  styleUrls: ['./membre-liste.component.scss']
})
export class MembreListeComponent implements OnInit {

  membres: Array<MembreModel>=null;
  loading=true;

  constructor(
    private membresService: MembresService
  ) { }

  ngOnInit() {

    this.membresService.getMembres()
      .subscribe(
        res => this.membres=res,
        err => console.error( 'error:', err),
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
