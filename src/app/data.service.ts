import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn  : 'root'
})

export class DataService implements IDataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IPaginatedResult<IUser>> {
    return this.http.get<IPaginatedResult<IUser>>('https://reqres.in/api/users');
  }
}

export interface IDataService {
  getUsers(): Observable<IPaginatedResult<IUser>>;
}
