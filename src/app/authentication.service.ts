import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './login/User';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  API_URL: string = 'http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private httpClient: HttpClient,public router: Router) { 
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }
  register(user: User): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/users/register`, user).pipe(
        catchError(this.handleError)
    )
  }

  login(user: User) {
    console.log('Hello',user.password);
    return this.httpClient.post<any>(`${this.API_URL}/users/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        this.getUserProfile(res._id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate(['users/profile/' + res.msg._id]);
        })
      })
  }getAccessToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['users/login']);
    }
  }

  getUserProfile(id): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/users/profile/${id}`, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
