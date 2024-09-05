import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post('http://localhost:3000/data', userData);
  }

  saveUser(userData: any): Observable<any> {
    return this.http.get('http://localhost:3000/data', userData);
  }
}
