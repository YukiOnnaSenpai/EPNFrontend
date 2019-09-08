import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Srez } from '../models/srez';


const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SrezService {

  apiURL: string = 'http://localhost:8083/api/srez';
  dataChange: Srez[];

  constructor(private httpClient: HttpClient) {}

public createSrez(Srez: Srez): Observable<Srez> {
	return this.httpClient.post<Srez>(`${this.apiURL}`, Srez).pipe(
		tap((Srez: Srez) => console.log(`added Srez w/`)),
		catchError(this.handleError<Srez>('addSrez'))
	);
}

public updateSrez(Srez: Srez): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${Srez.id}`, Srez).pipe(
	tap(_ => console.log(`updated Srez id=${Srez.id}`)),
	catchError(this.handleError<any>('updateSrez'))
  );
}

public deleteSrez(id: number): Observable<Srez> {
	return this.httpClient.delete<Srez>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted Srez id=${id}`)),
      catchError(this.handleError<Srez>('deleteSrez'))
	);
}

public getSrez (id: number) : Observable<Srez> {
  return this.httpClient.get<Srez>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched Srez id=${id}`)),
	  catchError(this.handleError<Srez>(`getSrez id=${id}`))
  );
}

public getSrezs() : Observable<Srez[]>{
  return this.httpClient.get<Srez[]>(`${this.apiURL}/`).pipe(
	  tap(Srez => console.log('Fetch Srezs')),
	  catchError(this.handleError('getSrezs', []))
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
