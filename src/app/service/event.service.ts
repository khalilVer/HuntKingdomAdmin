import { Categorie } from '../Model/categorie';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventService {

   // Define API
   apiURL = 'http://localhost/HuntersKingdom/web/app_dev.php/event';

   // Http Options
   httpOptions = {
       headers: new HttpHeaders({
           'Content-Type': 'application/json'
       })
   };

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any[]> {
    return this.http.get<any[]>( this.apiURL +'/getall')
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

createEvent(event): Observable<Event> {
    return this.http.post<Event>(this.apiURL + '/add', JSON.stringify(event), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}
deleteEvent(id) {
    return this.http.delete<Event>(this.apiURL + '/delete/' + id , this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

getEvent(id): Observable<Event> {
    return this.http.get<Event>(this.apiURL + '/get/' + id)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

updateEvent(id, event): Observable<Event> {
    return this.http.put<Event>(this.apiURL + '/update/' + id  , JSON.stringify(event), this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.handleError)
        );
}

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
