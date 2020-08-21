import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './login/User';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // API_URL: string = 'http://localhost:4000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  private readonly url = environment.url;



  currentUser = {};

  constructor(private httpClient: HttpClient, public router: Router) {
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }
  public getAll(): Observable<any> {
    return this.httpClient.get<User[]>(`${this.url}/user`);
  }
  // Function to Register the new user
  register(user: User): Observable<any> {

    return this.httpClient.post(`${this.url}/user/signup`, user).pipe(
      catchError(this.handleError)
    )
  }
  /////////////////////////////////////
  /* API Call to verify otp code */
  //Verifying the email address while signing the user up
  verifyOTPEmail(user: any): Observable<any> {

    return this.httpClient.post(`${this.url}/user/verifyemail`, user).pipe(
      catchError(this.handleError)
    )
  }
  //Verifying the user using otp code to his gmail to change his/her password
  verifyOTPCode(user: any): Observable<any> {

    return this.httpClient.post(`${this.url}/user/password/verifyotpcode`, user).pipe(
      catchError(this.handleError)
    )
  }
  //Adding new password after forgetting the old password
  newpassword(user: any): Observable<any> {

    return this.httpClient.post(`${this.url}/user/password/newpassword`, user).pipe(
      catchError(this.handleError)
    )
  }

  // Function to Login the already existed user
  login(user: User): Observable<any> {
    // console.log('Hello', user.email);
    return this.httpClient.post(`${this.url}/user/login`, user);
      // .subscribe((data: any) => {
      //   localStorage.setItem('access_token', data.token)
      //   this.getUserProfile(data._id).subscribe((data) => {
      //     this.currentUser = data;
      //     this.router.navigate(['users/profile/' + data.msg._id]);
      //   })
      // })
  } 
  
  verifyEmail (body:any): Observable<any>{
    return this.httpClient.post(`${this.url}/user/password/verifyemail`, body);

  }
  
  
  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
  ////////// Logout Function ////////////////
  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['users/login']);
    }
  }
  ///////////////////////////////////////////

  ///////// Get Profile Function ////////////
  getUserProfile(id): Observable<any> {
    return this.httpClient.get(`${this.url}/user/profile/${id}`, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }
  ///////////////////////////////////////////

  ///////// Error Handling /////////////////
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
