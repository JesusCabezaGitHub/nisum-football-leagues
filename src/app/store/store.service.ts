import { Injectable } from '@angular/core';
import { LeagueDto } from '../models/api-response.model'

export type CountrySelected = 'all' | string

export interface LeagueStore {
  leagues: LeagueDto[],
  countrySelected: CountrySelected
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  leaguesStore: LeagueStore;

  constructor() {
    this.leaguesStore = {
      leagues: [], 
      countrySelected: 'all'
    }
  }
  
  setLeagues(leagues: LeagueDto[]) {
    this.leaguesStore = {
      ...this.leaguesStore,
      leagues: [...leagues]
    }
  }

  setCountrySelected(countrySelected: CountrySelected) {
    this.leaguesStore = {
      ...this.leaguesStore,
      countrySelected
    }
    console.log('Estado actual del store - setCountrySelected: ', this.leaguesStore);
    
  }


}
