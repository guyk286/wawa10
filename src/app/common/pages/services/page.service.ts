import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PageModel } from '../model/page.model';

@Injectable({
  providedIn: 'root'
})
export class PageService 
{

  constructor(
    private httpClient: HttpClient
  ) { }

  getPageContentByKey( pageKey: string): Observable<PageModel>
  {
    const apiUrl=`${environment.baseURL}/10/pages/pageContentByKey.json?pageKey=${pageKey}`;
    return this.httpClient.get<PageModel>(apiUrl);
  }

  savePage( page: PageModel): Observable<PageModel>
  {
    const apiUrl=`${environment.baseURL}/10/pages/savePage.json`;
      
    const postData = new FormData();
    postData.append('page' , JSON.stringify(page) );
  
    return this.httpClient.post<PageModel>( apiUrl, postData /* , { headers: this.httpHeaders}*/ );
  }
}
