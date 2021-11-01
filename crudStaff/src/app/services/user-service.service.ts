import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../Models/User';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  endpoint: string = 'http://localhost:4000'

  constructor(private http: HttpClient, private router: Router) { }

  getStaff(): Observable<any> {
    let api = `${this.endpoint}/Users`
    return this.http
      .get(api)
      .pipe(catchError(this.handleError))
  }

  getStaffById(id: number): Observable<any> {
    let api = `${this.endpoint}/Users/${id}`
    return this.http
      .get(api)
      .pipe(catchError(this.handleError))
  }

  createStaff(staff: User): Observable<any> {
    let api = `${this.endpoint}/Users`
    return this.http
      .post(api, staff)
      .pipe(catchError(this.handleError))
  }

  updateStaff(id: number, staff: User): Observable<any> {
    let api = `${this.endpoint}/Users/${id}`
    return this.http
      .put(api, staff)
      .pipe(catchError(this.handleError))
  }

  deleteStaff(id: number): Observable<any> {
    let api = `${this.endpoint}/Users/${id}`
    return this.http
      .delete(api)
      .pipe(catchError(this.handleError))
  }

  handleError(err: HttpErrorResponse) {
    if(err.error instanceof ErrorEvent) {
      return throwError(err.error.message)
    } else {
      return throwError(`Server-side error code: ${err.status}\n Msg:${err.message}`)
    }
  }
}
