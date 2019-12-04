import {Injectable} from '@angular/core';
import {FiltersAbstract} from './cars-service-abstract';
import {Filter, Paginator, SearchCarParams} from '../car-interfaces';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const serverURL = environment.serverURL;

@Injectable({
  providedIn: 'root'
})
export class FiltersService implements FiltersAbstract {

  constructor(private httpClient: HttpClient) {
  }

  getFilters(): Promise<Filter> {
    return undefined;
  }

  searchByCoordinates(): Observable<Paginator> {
    return undefined;
  }

  searchByFilters(): Observable<Paginator> {
    return undefined;
  }

  searchCar(searchParams: SearchCarParams): Observable<Paginator> {
    return this.httpClient.get<Paginator>(`${serverURL}/search?city=${searchParams.city}&start_date=${searchParams.start_date}&end_date=${searchParams.end_date}&min_amount=${searchParams.min_amount}&max_amount=${searchParams.max_amount}&ascending=${searchParams.ascending}&items_on_page=${searchParams.items_on_page}&current_page=${searchParams.current_page}`);
  }
}
