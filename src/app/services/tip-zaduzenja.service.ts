import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TipZaduzenja } from '../models/tip-zaduzenja';


const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TipZaduzenjaService {

  apiURL: string = 'http://localhost:8083/api/tipZaduzenja';
  dataChange: TipZaduzenja[];

  constructor(private httpClient: HttpClient) {}

public createTipZaduzenja(TipZaduzenja: TipZaduzenja): Observable<TipZaduzenja> {
	return this.httpClient.post<TipZaduzenja>(`${this.apiURL}`, TipZaduzenja).pipe(
		tap((TipZaduzenja: TipZaduzenja) => console.log(`added TipZaduzenja w/ id=${TipZaduzenja.id}`)),
		catchError(this.handleError<TipZaduzenja>('addTipZaduzenja'))
	);
}

public updateTipZaduzenja(TipZaduzenja: TipZaduzenja): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${TipZaduzenja.id}`, TipZaduzenja).pipe(
	tap(_ => console.log(`updated TipZaduzenja id=${TipZaduzenja.id}`)),
	catchError(this.handleError<any>('updateTipZaduzenja'))
  );
}

public deleteTipZaduzenja(id: number): Observable<TipZaduzenja> {
	return this.httpClient.delete<TipZaduzenja>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted TipZaduzenja id=${id}`)),
      catchError(this.handleError<TipZaduzenja>('deleteTipZaduzenja'))
	);
}

public getTipZaduzenja (id: number) : Observable<TipZaduzenja> {
  return this.httpClient.get<TipZaduzenja>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched TipZaduzenja id=${id}`)),
	  catchError(this.handleError<TipZaduzenja>(`getTipZaduzenja id=${id}`))
  );
}

public getTipZaduzenjas() : Observable<TipZaduzenja[]>{
  return this.httpClient.get<TipZaduzenja[]>(`${this.apiURL}/`).pipe(
	  tap(TipZaduzenja => console.log('Fetch TipZaduzenjas')),
	  catchError(this.handleError('getTipZaduzenjas', []))
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
