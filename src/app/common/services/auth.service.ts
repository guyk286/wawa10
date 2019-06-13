import { Injectable } from '@angular/core';
import { UserItf } from '../model/user.model';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MessageModel } from '../model/message.model';
import { environment } from '../../../environments/environment';
import { ResponseModel } from '../model/response.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private user: UserItf;
    public userEvents = new BehaviorSubject<UserItf>(undefined);

    constructor(
      private httpClient: HttpClient
    ) 
    { }

    resentPassword( username: string ):Observable<MessageModel>
    {
        const apiUrl=`${environment.baseURL}/auth/resendPassword.json`;
        const postData = new FormData();
        postData.append('username' , username );
        return this.httpClient.post<MessageModel>( apiUrl, postData );
    }

    getUser()
    {
      // return { ...this.user };
      return this.user;
    }
    
    isAuth()
    {
      return this.user != null;
    }
  
    isUserLoggedIn(): boolean
    {
        return this.user && this.user!==null;
    }
    
    isUserAdmin(): boolean
    {
        return this.user && this.user!==null && this.user.isAdmin && this.user.isAdmin===true;
    }
    
    isUserSuperAdmin()
    {
        return this.user && this.user!==null && this.user.isSuperAdmin && this.user.isSuperAdmin===true;
    }
  
  
  
    login(username: string, password: string): Observable<UserItf>
    {
        const apiUrl=`${environment.baseURL}/10/auth10/login.json`;
      
        const postData = new FormData();
        postData.append('username' , username );
        postData.append('password' , password );
        console.log('login using data - username:'+username+', password: '+password ); 
      
        return this.httpClient.post<UserItf>( apiUrl, postData /* , { headers: this.httpHeaders}*/ )
             .do(user => this.postProcessLogin(user));
    }
  
    postProcessLogin(user)
    {
        this.user=user;
        this.userEvents.next(user);
     }
  
  
    logout(): Observable<ResponseModel>
    {
        console.log('logout');
        
        const apiUrl=`${environment.baseURL}/10/auth10/logout.json`;     
        const postData = new FormData();
        postData.append('action' , 'logout' );
      
        return this.httpClient.post<ResponseModel>( apiUrl, postData /* , { headers: this.httpHeaders}*/ )
            .do( () => this.postProcessLogout() )
        ;
    }
  
    
    postProcessLogout()
    {
        this.user=null;
        this.userEvents.next(null);
    }
}
