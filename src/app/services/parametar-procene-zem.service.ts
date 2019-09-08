import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ParametarProceneZem } from '../models/parametar-procene-zem';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ParametarProceneZemService {

  apiURL: string = 'http://localhost:8083/api/parametarProceneZem';
  dataChange: ParametarProceneZem[];

  constructor(private httpClient: HttpClient) {}

public createParametarProceneZem(ParametarProceneZem: ParametarProceneZem): Observable<ParametarProceneZem> {
	return this.httpClient.post<ParametarProceneZem>(`${this.apiURL}`, ParametarProceneZem).pipe(
		tap((ParametarProceneZem: ParametarProceneZem) => console.log(`added ParametarProceneZem w/ id=${ParametarProceneZem.id}`)),
		catchError(this.handleError<ParametarProceneZem>('addParametarProceneZem'))
	);
}

public updateParametarProceneZem(ParametarProceneZem: ParametarProceneZem): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${ParametarProceneZem.id}`, ParametarProceneZem).pipe(
	tap(_ => console.log(`updated ParametarProceneZem id=${ParametarProceneZem.id}`)),
	catchError(this.handleError<any>('updateParametarProceneZem'))
  );
}

public deleteParametarProceneZem(id: number): Observable<ParametarProceneZem> {
	return this.httpClient.delete<ParametarProceneZem>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted ParametarProceneZem id=${id}`)),
      catchError(this.handleError<ParametarProceneZem>('deleteParametarProceneZem'))
	);
}

public getParametarProceneZem (id: number) : Observable<ParametarProceneZem> {
  return this.httpClient.get<ParametarProceneZem>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched ParametarProceneZem id=${id}`)),
	  catchError(this.handleError<ParametarProceneZem>(`getParametarProceneZem id=${id}`))
  );
}

public getParametarProceneZems() : Observable<ParametarProceneZem[]>{
  return this.httpClient.get<ParametarProceneZem[]>(`${this.apiURL}/`).pipe(
	  tap(ParametarProceneZem => console.log('Fetch ParametarProceneZems')),
	  catchError(this.handleError('getParametarProceneZems', []))
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
