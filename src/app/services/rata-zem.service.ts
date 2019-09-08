import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { RataZem } from '../models/rata-zem';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class RataZemService {

  apiURL: string = 'http://localhost:8083/api/rataZem';
  dataChange: RataZem[];

  constructor(private httpClient: HttpClient) {}

public createRataZem(RataZem: RataZem): Observable<RataZem> {
	return this.httpClient.post<RataZem>(`${this.apiURL}`, RataZem).pipe(
		tap((RataZem: RataZem) => console.log(`added RataZem w/ id=${RataZem.id}`)),
		catchError(this.handleError<RataZem>('addRataZem'))
	);
}

public updateRataZem(RataZem: RataZem): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${RataZem.id}`, RataZem).pipe(
	tap(_ => console.log(`updated RataZem id=${RataZem.id}`)),
	catchError(this.handleError<any>('updateRataZem'))
  );
}

public deleteRataZem(id: number): Observable<RataZem> {
	return this.httpClient.delete<RataZem>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted RataZem id=${id}`)),
      catchError(this.handleError<RataZem>('deleteRataZem'))
	);
}

public getRataZem (id: number) : Observable<RataZem> {
  return this.httpClient.get<RataZem>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched RataZem id=${id}`)),
	  catchError(this.handleError<RataZem>(`getRataZem id=${id}`))
  );
}

public getRataZems() : Observable<RataZem[]>{
  return this.httpClient.get<RataZem[]>(`${this.apiURL}/`).pipe(
	  tap(RataZem => console.log('Fetch RataZems')),
	  catchError(this.handleError('getRataZems', []))
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
