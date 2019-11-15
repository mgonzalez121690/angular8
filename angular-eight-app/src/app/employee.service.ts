import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(
                        catchError(
                          err => {
                            console.log(stringify(err));
                            return throwError(err);
                          }
                        )      
                    );                
    //.catch(this.errorHandler);
               
  }

  errorHandler(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server error" );
  }

}
