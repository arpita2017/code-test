import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   url = 'http://localhost:4200/batchUsers';

  constructor(private http: HttpClient ) { }

   AddBatchRecords(userList:any): Observable<any> {
  
    return this.http.post(this.url, userList,
      {
      headers : {
        'content-Type' : 'application/json'
      }

    }
    )};
  


  public getUsers(): Observable<User[]> 
  {

    return this.http.get<User[]>(this.url);
  }


}
