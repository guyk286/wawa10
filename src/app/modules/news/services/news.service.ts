import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageModel } from '../../../common/model/message.model';
import { environment } from '../../../../environments/environment';
import { AuthenticatedUserModel } from '../../auth/model/authenticated-user.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  /*

  this.newsForm = this.formBuilder.group({
        title: ['', Validators.required],
        presentation: ['', Validators.required],
        status: ['', Validators.required],
        externalLink: [''],
        showOrder: ['', Validators.required],
        avatar: [null],
        pdf: [''],
        image: [''],
        avatarPdf: [null],
      });
  */
  createNews(newsFormValue: any, user: AuthenticatedUserModel): Observable<any> 
  {
    const apiUrl=`${environment.apiUrl}/news/create`;
    const postData = new FormData();
    postData.append('title' , newsFormValue.title );
    postData.append('presentation' , newsFormValue.presentation );
    postData.append('status' , newsFormValue.status );
    postData.append('externalLink' , newsFormValue.externalLink );
    postData.append('showOrder' , newsFormValue.showOrder );
    postData.append('avatar' , newsFormValue.avatar );
    postData.append('pdf' , newsFormValue.pdf );
    postData.append('image' , newsFormValue.image );
    postData.append('avatarPdf' , newsFormValue.avatarPdf );
    postData.append('auteurId' , String(user.getId()) );
    return this.httpClient.post<any>(apiUrl,  postData);
  }

}
