import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaginatedResult } from './models/paginated.result.model';
import { IUser } from './models/user.model';

@Injectable({
  providedIn  : 'root'
})

export class DataService implements IDataService {

  url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<HttpEvent<IPaginatedResult<IUser>>> {
    const request = new HttpRequest('GET', this.url, {
      reportProgress: true
    });

    return this.http.request(request);
  }
}

export interface IDataService {
  getUsers(): Observable<HttpEvent<IPaginatedResult<IUser>>>;
}
