import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { ContactModel } from '../../../model/contact.model';
import { MessageModel } from '../../../model/message.model';

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient ) { }

   sendMessage(sujet: string, email: string, message: string): Observable<MessageModel>
    {
            const headers = new HttpHeaders({
                  'Content-Type': 'application/x-www-form-urlencoded'
                });
       const apiUrl=`${environment.baseURL}/contact/sendmessage`;
      const data={ sujet: sujet, email: email, message: message};
      const postData = new FormData();
      postData.append('body' , JSON.stringify(data) );
     
         return this.httpClient.post<MessageModel>(apiUrl,  postData);
                                                              // .subscribe(response => console.log(response));
    }
  
    sendMessage2(jsonMessage: string): Observable<MessageModel>
    {
         const apiUrl=`${environment.baseURL}/contact/sendmessage2`;
        // const data={ sujet: sujet, email: email, message: message};
        const postData = new FormData();
        postData.append('body' , JSON.stringify(jsonMessage) );
     
         return this.httpClient.post<MessageModel>(apiUrl,  postData);
                                                              // .subscribe(response => console.log(response));
    }
     
}
