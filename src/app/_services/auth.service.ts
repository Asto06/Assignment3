import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const AUTH_API = `${environment.API_URL}api/`;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password,
    });
  }

  register(
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    telephone: string,
    city: string
  ): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      email,
      password,
      firstname,
      lastname,
      telephone,
      city,
    });
  }
}
