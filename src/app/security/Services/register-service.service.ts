import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../models/iregister';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private api_url = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  register(user: IRegister): Observable<any> {
    return this.http.post<any>(`${this.api_url}/register`, user);
  }
}