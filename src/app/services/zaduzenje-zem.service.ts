import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ZaduzenjeZem } from '../models/zaduzenje-zem';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ZaduzenjeZemService {

  apiURL: string = 'http://localhost:8083/api/zaduzenjeZem';
  dataChange: ZaduzenjeZem[];

  constructor(private httpClient: HttpClient) {}

public createZaduzenjeZem(ZaduzenjeZem: ZaduzenjeZem): Observable<ZaduzenjeZem> {
	return this.httpClient.post<ZaduzenjeZem>(`${this.apiURL}`, ZaduzenjeZem).pipe(
		tap((ZaduzenjeZem: ZaduzenjeZem) => console.log(`added ZaduzenjeZem w/ id=${ZaduzenjeZem.id}`)),
		catchError(this.handleError<ZaduzenjeZem>('addZaduzenjeZem'))
	);
}

public updateZaduzenjeZem(ZaduzenjeZem: ZaduzenjeZem): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${ZaduzenjeZem.id}`, ZaduzenjeZem).pipe(
	tap(_ => console.log(`updated ZaduzenjeZem id=${ZaduzenjeZem.id}`)),
	catchError(this.handleError<any>('updateZaduzenjeZem'))
  );
}

public deleteZaduzenjeZem(id: number): Observable<ZaduzenjeZem> {
	return this.httpClient.delete<ZaduzenjeZem>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted ZaduzenjeZem id=${id}`)),
      catchError(this.handleError<ZaduzenjeZem>('deleteZaduzenjeZem'))
	);
}

public getZaduzenjeZem (id: number) : Observable<ZaduzenjeZem> {
  return this.httpClient.get<ZaduzenjeZem>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched ZaduzenjeZem id=${id}`)),
	  catchError(this.handleError<ZaduzenjeZem>(`getZaduzenjeZem id=${id}`))
  );
}

public getZaduzenjeZems() : Observable<ZaduzenjeZem[]>{
  return this.httpClient.get<ZaduzenjeZem[]>(`${this.apiURL}/`).pipe(
	  tap(ZaduzenjeZem => console.log('Fetch ZaduzenjeZems')),
	  catchError(this.handleError('getZaduzenjeZems', []))
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
