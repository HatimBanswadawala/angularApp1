import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  public userData():Observable<any>{
    const url = "https://reqres.in/api/users?per_page=12";
    return this.http.get<any>(url);
  }
}