import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Produit} from '../Model/produit';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
    // Define API
    apiURL = 'pi/hunterskingdom/web/app_dev.php/api';

    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) { }
    getProducts(): Observable<Produit> {
        return this.http.get<Produit>( this.apiURL + '/produits')
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    createProduct(product): Observable<Produit> {
        return this.http.post<Produit>(this.apiURL + '/produits/new', JSON.stringify(product), this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }
    deleteProduct(id) {
        return this.http.delete<Produit>(this.apiURL + '/produits/' + id + '/delete', this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    getProduct(id): Observable<Produit> {
        return this.http.get<Produit>(this.apiURL + '/produits/' + id)
            .pipe(
                retry(1),
                catchError(this.handleError)
            );
    }

    updateProduct(id, produit): Observable<Produit> {
        return this.http.put<Produit>(this.apiURL + '/produits/' + id + '/edit' , JSON.stringify(produit), this.httpOptions)
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
