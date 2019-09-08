import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ModelProcene } from '../models/model-procene';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ModelProceneService {

  apiURL: string = 'http://localhost:8083/api/modelProcene';
  dataChange: ModelProcene[];

  constructor(private httpClient: HttpClient) {}

public createModelProcene(ModelProcene: ModelProcene): Observable<ModelProcene> {
	return this.httpClient.post<ModelProcene>(`${this.apiURL}`, ModelProcene).pipe(
		tap((ModelProcene: ModelProcene) => console.log(`added ModelProcene w/ id=${ModelProcene.id}`)),
		catchError(this.handleError<ModelProcene>('addModelProcene'))
	);
}

public updateModelProcene(ModelProcene: ModelProcene): Observable<any> {
  return this.httpClient.put(`${this.apiURL}/${ModelProcene.id}`, ModelProcene).pipe(
	tap(_ => console.log(`updated ModelProcene id=${ModelProcene.id}`)),
	catchError(this.handleError<any>('updateModelProcene'))
  );
}

public deleteModelProcene(id: number): Observable<ModelProcene> {
	return this.httpClient.delete<ModelProcene>(`${this.apiURL}/${id}`, httpOptions).pipe(
		tap(_ => console.log(`deleted ModelProcene id=${id}`)),
      catchError(this.handleError<ModelProcene>('deleteModelProcene'))
	);
}

public getModelProcene (id: number) : Observable<ModelProcene> {
  return this.httpClient.get<ModelProcene>(`${this.apiURL}/${id}`).pipe(
	  tap(_ => console.log(`fetched ModelProcene id=${id}`)),
	  catchError(this.handleError<ModelProcene>(`getModelProcene id=${id}`))
  );
}

public getModelProcenes() : Observable<ModelProcene[]>{
  return this.httpClient.get<ModelProcene[]>(`${this.apiURL}/`).pipe(
	  tap(ModelProcene => console.log('Fetch ModelProcenes')),
	  catchError(this.handleError('getModelProcenes', []))
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
