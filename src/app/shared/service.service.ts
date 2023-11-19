import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Members } from '../model/members';
// import { Committes } from '../model/members';
import { Committes } from './../model/committes';



@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  readonly url = `http://localhost:3000/`;
  constructor(private http: HttpClient) {}

  
  //addmembers
  addCommittes(emp: Committes): Observable<any> {
    return this.http.post(this.url + `addcomments`, emp);
  }
  // getData to Committes/////
  getAllCommittes(): Observable<any> {
    return this.http.get(this.url + `addcomments`);
  }
  // update user by id to tabel by id/////
  updateCommittes(emp: Committes): Observable<any> {
    return this.http.put(this.url + `addcomments/` + emp.id, emp);
  }
  deleteCommittes(ID: string): Observable<any> {
    return this.http.delete(this.url + `addcomments/` + ID);
  }



/////////////////////////////////////////////////////////////
  //addmembers
  addMembers(emp: Members): Observable<any> {
    return this.http.post(this.url + `users`, emp);
  }

  // postData addNewitems/////

  // getData to tabel/////
  getAllMembers(): Observable<any> {
    return this.http.get(this.url + `users`);
  }

  // update user by id to tabel by id/////
  updateMembers(emp: Members): Observable<any> {
    return this.http.put(this.url + `users/` + emp.id, emp);
  }
  deleteMembers(ID: string): Observable<any> {
    return this.http.delete(this.url + `users/` + ID);
  }
}
