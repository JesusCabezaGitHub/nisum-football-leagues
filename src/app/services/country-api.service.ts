import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiCountryResponse, Country } from '../models/api-response.model';
import { environment } from '../../environments/environment';


@Injectable()
export class CountryApiService {

  private readonly httpClient = inject(HttpClient);
  //private readonly url = environment.API_COUNTRY_URL;
  private readonly url = '../../assets/countries.json';

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<ApiCountryResponse>(this.url).pipe(
      map(response => response.response)
    )
  }
}
