import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiLeagueResponse, LeagueDto } from '../models/api-response.model';
import { environment } from '../../environments/environment';

@Injectable()
export class LeaguesApiService {
  private readonly httpClient = inject(HttpClient);
  //private readonly url = environment.API_LEAGUES_URL;
  private readonly url = '../../assets/leagues.json';
  
  constructor() { }

  getLeagues(): Observable<LeagueDto[]> {
    return this.httpClient.get<ApiLeagueResponse>(this.url).pipe(
      map(response => response.response),
      map( data => {
        return data.map( league => {
          return {
            league: league.league,
            country: league.country
          }
        } )
      })
    )
  }
}
