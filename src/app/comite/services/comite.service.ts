import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { MembreModel } from '../../common/model/membre.model';

@Injectable({
  providedIn: 'root'
})
export class ComiteService 
{

  constructor(
    private httpClient: HttpClient 
  ) { }

  getMembresComite(): Observable<Array<MembreModel>>
  {
    const apiUrl=`${environment.baseURL}/10/membre10/membresComite.json`;
    return this.httpClient.get<Array<MembreModel>>(apiUrl);
  }

  /*

  const apiUrl=`${environment.baseURL}/userinfos/createOrUpdateProfile.json`;
              const postData = new FormData();
              postData.append('initdata_id' , String( initdata_id )  );
              postData.append('profileFormValue' ,  JSON.stringify( profileFormValue  ) );
              return this.httpClient.post<any>( apiUrl, postData );

  */
}
