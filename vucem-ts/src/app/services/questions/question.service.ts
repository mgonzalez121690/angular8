import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Question } from 'src/app/model/question';
import { Observable, throwError } from 'rxjs';
import { UrlServiceContants } from 'src/app/constants/ur-service-contants';
import { catchError } from 'rxjs/operators';
import { Search } from 'src/app/model/search';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  

  constructor(private _http: HttpClient) { }

  push(question: Question): Observable<any> {
    return this._http.post<any>(UrlServiceContants.URL_PUSH_QUESTION_SERVICE, question)
              .pipe(catchError(this.errorHandler));
  }

  pull(keyword): Observable<Search[]>{
    let _url = '';
    if( keyword === null || keyword === undefined ){
      _url = UrlServiceContants.URL_PULL_QUESTION_SERVICE;
    }else{
      _url = UrlServiceContants.URL_GET_KEY_WORD_QUESTION_SERVICE+'/'+ keyword;
    }

    return this._http.get<Search[]>(_url)
    .pipe(catchError(this.errorHandler));    
  }

  getById(idQuestion): Observable<Search>{
    let _url = UrlServiceContants.URL_GET_ONE_QUESTION_SERVICE+'/'+idQuestion;
    return this._http.get<Search>(_url)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler( error: HttpErrorResponse ){
    return throwError(error);
  }
  
}
