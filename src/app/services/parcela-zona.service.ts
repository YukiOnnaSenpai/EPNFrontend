import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ParcelaZona } from '../models/parcela-zona';


const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ParcelaZonaService {

  apiURL: string = 'http://localhost:8083/api/parcelaZona';
  dataChange: ParcelaZona[];

  constructor(private httpClient: HttpClient) {}

public createParcelaZona(ParcelaZona: ParcelaZona): Observable<ParcelaZona> {
	return this.httpClient.post<ParcelaZona>(`${this.apiURL}`, ParcelaZona).pipe(
		tap((ParcelaZona: ParcelaZona) => console.log(`added ParcelaZona w/ id=${ParcelaZona.id}`)),
		catchError(this.handleError<ParcelaZona>('addParcelaZona'))
	);
}

public updateParcelaZona(ParcelaZona: ParcelaZona): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${ParcelaZona.id}`, ParcelaZona).pipe(
	tap(_ => console.log(`updated ParcelaZona id=${ParcelaZona.id}`)),
	catchError(this.handleError<any>('updateParcelaZona'))
  );
}

public deleteParcelaZona(id: number): Observable<ParcelaZona> {
	return this.httpClient.delete<ParcelaZona>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted ParcelaZona id=${id}`)),
      catchError(this.handleError<ParcelaZona>('deleteParcelaZona'))
	);
}

public getParcelaZona (id: number) : Observable<ParcelaZona> {
  return this.httpClient.get<ParcelaZona>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched ParcelaZona id=${id}`)),
	  catchError(this.handleError<ParcelaZona>(`getParcelaZona id=${id}`))
  );
}

public getParcelaZonas() : Observable<ParcelaZona[]>{
  return this.httpClient.get<ParcelaZona[]>(`${this.apiURL}/`).pipe(
	  tap(ParcelaZona => console.log('Fetch ParcelaZonas')),
	  catchError(this.handleError('getParcelaZonas', []))
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
