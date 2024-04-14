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
  private leaguesStore: LeagueStore;

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
    console.log('Estado actual del store - setCountrySelected: ', this.leaguesStore);
  }

  setCountrySelected(countrySelected: CountrySelected) {
    this.leaguesStore = {
      ...this.leaguesStore,
      countrySelected
    }
    console.log('Estado actual del store - setLeagues: ', this.leaguesStore);    
  }

  getCountrySelected() {
    return this.leaguesStore.countrySelected;
  }

  getLeagues() {
    return this.leaguesStore.leagues;
  }


}
