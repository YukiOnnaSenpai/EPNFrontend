import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { VrednostZem } from '../models/vrednost-zem';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class VrednostZemService {

  apiURL: string = 'http://localhost:8083/api/vrednostZem';
  dataChange: VrednostZem[];

  constructor(private httpClient: HttpClient) {}

public createVrednostZem(VrednostZem: VrednostZem): Observable<VrednostZem> {
	return this.httpClient.post<VrednostZem>(`${this.apiURL}`, VrednostZem).pipe(
		tap((VrednostZem: VrednostZem) => console.log(`added VrednostZem w/ id=${VrednostZem.id}`)),
		catchError(this.handleError<VrednostZem>('addVrednostZem'))
	);
}

public updateVrednostZem(VrednostZem: VrednostZem): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${VrednostZem.id}`, VrednostZem).pipe(
	tap(_ => console.log(`updated VrednostZem id=${VrednostZem.id}`)),
	catchError(this.handleError<any>('updateVrednostZem'))
  );
}

public deleteVrednostZem(id: number): Observable<VrednostZem> {
	return this.httpClient.delete<VrednostZem>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted VrednostZem id=${id}`)),
      catchError(this.handleError<VrednostZem>('deleteVrednostZem'))
	);
}

public getVrednostZem (id: number) : Observable<VrednostZem> {
  return this.httpClient.get<VrednostZem>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched VrednostZem id=${id}`)),
	  catchError(this.handleError<VrednostZem>(`getVrednostZem id=${id}`))
  );
}

public getVrednostZems() : Observable<VrednostZem[]>{
  return this.httpClient.get<VrednostZem[]>(`${this.apiURL}/`).pipe(
	  tap(VrednostZem => console.log('Fetch VrednostZems')),
	  catchError(this.handleError('getVrednostZems', []))
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
