import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NamenaZem } from '../models/namena-zem';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NamenaZemService {

  apiURL: string = 'http://localhost:8083/api/namenaZem';
  dataChange: NamenaZem[];

  constructor(private httpClient: HttpClient) {}

public createNamenaZem(NamenaZem: NamenaZem): Observable<NamenaZem> {
	return this.httpClient.post<NamenaZem>(`${this.apiURL}`, NamenaZem).pipe(
		tap((NamenaZem: NamenaZem) => console.log(`added NamenaZem w/ id=${NamenaZem.id}`)),
		catchError(this.handleError<NamenaZem>('addNamenaZem'))
	);
}

public updateNamenaZem(NamenaZem: NamenaZem): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${NamenaZem.id}`, NamenaZem).pipe(
	tap(_ => console.log(`updated NamenaZem id=${NamenaZem.id}`)),
	catchError(this.handleError<any>('updateNamenaZem'))
  );
}

public deleteNamenaZem(id: number): Observable<NamenaZem> {
	return this.httpClient.delete<NamenaZem>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted NamenaZem id=${id}`)),
      catchError(this.handleError<NamenaZem>('deleteNamenaZem'))
	);
}

public getNamenaZem (id: number) : Observable<NamenaZem> {
  return this.httpClient.get<NamenaZem>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched NamenaZem id=${id}`)),
	  catchError(this.handleError<NamenaZem>(`getNamenaZem id=${id}`))
  );
}

public getNamenaZems() : Observable<NamenaZem[]>{
  return this.httpClient.get<NamenaZem[]>(`${this.apiURL}/`).pipe(
	  tap(NamenaZem => console.log('Fetch NamenaZems')),
	  catchError(this.handleError('getNamenaZems', []))
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
