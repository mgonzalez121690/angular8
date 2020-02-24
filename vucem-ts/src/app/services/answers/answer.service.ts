import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UrlServiceContants } from 'src/app/constants/ur-service-contants';
import { catchError } from 'rxjs/operators';
import { Answer } from 'src/app/model/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private _http: HttpClient) { }

  create(answer: Answer){

  }

  getByQuestionId(questionId): Observable<Answer[]>{
    return this._http.get<Answer[]>(UrlServiceContants.URL_GET_ALL_ANSWER_BY_QUESTION_ID)
              .pipe(catchError(this.errorHandler));           
              
  }

  errorHandler( error: HttpErrorResponse ){
    return throwError(error);
  }

}
