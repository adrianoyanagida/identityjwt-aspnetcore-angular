import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class HttpEndpointsService {
  baseURL = 'http://localhost:5000/api/user/';
  decodedToken: any;
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(`${this.baseURL}login`, model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          sessionStorage.setItem('username', this.decodedToken.unique_name);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(`${this.baseURL}Register`, model);
  }

  loggedIn() {
    const token = this.getTokenFromLocalStorage();
    return !this.jwtHelper.isTokenExpired(token); // Retorna se não estiver expirado
  }

  isExpired() {
    const token = this.getTokenFromLocalStorage();
    return this.jwtHelper.isTokenExpired(token); // Retorna se estiver expirado
  }

  getTokenFromLocalStorage() {
    return localStorage.getItem('token');
  }
}
