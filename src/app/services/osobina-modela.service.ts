import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { OsobinaModela } from '../models/osobina-modela';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OsobinaModelaService {

  apiURL: string = 'http://localhost:8083/api/osobinaModela';
  apiURLForConnectedTable: string = 'http://localhost:8083/api/osobinaModela/modelProcene';
  dataChange: OsobinaModela[];

  constructor(private httpClient: HttpClient) {}

public createOsobinaModela(OsobinaModela: OsobinaModela): Observable<OsobinaModela> {
	return this.httpClient.post<OsobinaModela>(`${this.apiURL}`, OsobinaModela).pipe(
		tap((OsobinaModela: OsobinaModela) => console.log(`added OsobinaModela w/ id=${OsobinaModela.id}`)),
		catchError(this.handleError<OsobinaModela>('addOsobinaModela'))
	);
}

public updateOsobinaModela(OsobinaModela: OsobinaModela): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${OsobinaModela.id}`, OsobinaModela).pipe(
	tap(_ => console.log(`updated OsobinaModela id=${OsobinaModela.id}`)),
	catchError(this.handleError<any>('updateOsobinaModela'))
  );
}

public deleteOsobinaModela(id: number): Observable<OsobinaModela> {
	return this.httpClient.delete<OsobinaModela>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted OsobinaModela id=${id}`)),
      catchError(this.handleError<OsobinaModela>('deleteOsobinaModela'))
	);
}

public getOsobinaModela (id: number) : Observable<OsobinaModela> {
  return this.httpClient.get<OsobinaModela>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched OsobinaModela id=${id}`)),
	  catchError(this.handleError<OsobinaModela>(`getOsobinaModela id=${id}`))
  );
}

public getOsobinaModelas() : Observable<OsobinaModela[]>{
  return this.httpClient.get<OsobinaModela[]>(`${this.apiURL}/`).pipe(
	  tap(OsobinaModela => console.log('Fetch OsobinaModelas')),
	  catchError(this.handleError('getOsobinaModelas', []))
  );
}

public getOsobinaModelaByModelProcene(model : number): Observable<OsobinaModela[]> {
  return this.httpClient.get<OsobinaModela[]>(`${this.apiURLForConnectedTable}/${model}/`).pipe(
    tap(OsobinaModela => console.log(`fetched OsobinaModelaByModelProcene godina=${model}`)),
    catchError(this.handleError<any>('fetchedOsobinaModelaByModelProcene', []))
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
