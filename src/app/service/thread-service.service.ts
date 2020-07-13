import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { Thread } from '../Model/thread';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
//import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ThreadServiceService {

  // Define API
  apiURL = 'pi/hunterskingdom/web/app_dev.php/api';

  // Http Options
  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };

  constructor(private http: HttpClient) { }

  getThreads(): Observable<Thread> {
    return this.http.get<Thread>( this.apiURL + '/threads')
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

getThreadsToValidate(): Observable<Thread> {
    return this.http.get<Thread>( this.apiURL + '/threadstovalidate')
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}


deleteThread(id) {
    return this.http.delete<Thread>(this.apiURL + '/threads/' + id + '/delete', this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

validateThread(id) {
    return this.http.delete<Thread>(this.apiURL + '/threads/' + id + '/validate', this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

getThread(id): Observable<Thread> {
    return this.http.get<Thread>(this.apiURL + '/threads/' + id)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

// Error handling
handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
    } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
}
}
