import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TekstResenja } from '../models/tekst-resenja';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TekstResenjaService {

  apiURL: string = 'http://localhost:8083/api/tekstResenja';
  dataChange: TekstResenja[];

  constructor(private httpClient: HttpClient) {}

public createTekstResenja(TekstResenja: TekstResenja): Observable<TekstResenja> {
	return this.httpClient.post<TekstResenja>(`${this.apiURL}`, TekstResenja).pipe(
		tap((TekstResenja: TekstResenja) => console.log(`added TekstResenja w/ id=${TekstResenja.id}`)),
		catchError(this.handleError<TekstResenja>('addTekstResenja'))
	);
}

public updateTekstResenja(TekstResenja: TekstResenja): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${TekstResenja.id}`, TekstResenja).pipe(
	tap(_ => console.log(`updated TekstResenja id=${TekstResenja.id}`)),
	catchError(this.handleError<any>('updateTekstResenja'))
  );
}

public deleteTekstResenja(id: number): Observable<TekstResenja> {
	return this.httpClient.delete<TekstResenja>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted TekstResenja id=${id}`)),
      catchError(this.handleError<TekstResenja>('deleteTekstResenja'))
	);
}

public getTekstResenja (id: number) : Observable<TekstResenja> {
  return this.httpClient.get<TekstResenja>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched TekstResenja id=${id}`)),
	  catchError(this.handleError<TekstResenja>(`getTekstResenja id=${id}`))
  );
}

public getTekstResenjas() : Observable<TekstResenja[]>{
  return this.httpClient.get<TekstResenja[]>(`${this.apiURL}/`).pipe(
	  tap(TekstResenja => console.log('Fetch TekstResenjas')),
	  catchError(this.handleError('getTekstResenjas', []))
  );
}

private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
	};
}

}
