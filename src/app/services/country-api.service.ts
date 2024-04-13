import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiCountryResponse, Country } from '../models/api-country-response.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  private readonly httpClient = inject(HttpClient);
  private readonly url = environment.API_COUNTRY_URL;
  private readonly API_KEY = environment.API_KEY;

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<ApiCountryResponse>(this.url, this.createHeaders()).pipe(
      map(response => response.response)
    )
  }

  private createHeaders(): { headers: HttpHeaders } {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': this.API_KEY
    }); 
    return { headers };
  }
}
