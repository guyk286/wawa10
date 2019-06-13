import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MembreModel } from '../../../common/model/membre.model';

@Injectable({
  providedIn: 'root'
})
export class MembresService {

  constructor(
    private httpClient: HttpClient
    ) { }

    getMembres(): Observable<Array<MembreModel>>
  {
    const apiUrl=`${environment.baseURL}/10/membre10/membres.json`;
    return this.httpClient.get<Array<MembreModel>>(apiUrl);
  }
}
