import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Offre} from '../Model/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  // Define API
  apiURL = 'pi/hunterskingdom/web/app_dev.php/api';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  getOffres(): Observable<Offre> {
    return this.http.get<Offre>( this.apiURL + '/offres')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  createOffre(offre): Observable<Offre> {
    return this.http.post<Offre>(this.apiURL + '/offres/new', JSON.stringify(offre), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  deleteOffre(id) {
    return this.http.delete<Offre>(this.apiURL + '/offres/' + id + '/delete', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getOffre(id): Observable<Offre> {
    return this.http.get<Offre>(this.apiURL + '/offres/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  updateOffre(id, offre): Observable<Offre> {
    return this.http.put<Offre>(this.apiURL + '/offres/' + id + '/edit' , JSON.stringify(offre), this.httpOptions)
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
