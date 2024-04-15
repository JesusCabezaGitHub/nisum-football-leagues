import { Injectable } from '@angular/core';
import { LeagueDto, Country } from '../models/api-response.model'

export type CountrySelected = 'all' | string;
export type AddEditAction = 'add' | 'edit';

export interface LeagueStore {
  leagues: LeagueDto[],
  countries: Country[],
  currentLeagueForEdit: LeagueDto | null
  countrySelected: CountrySelected,
  addEditAction: AddEditAction,
  isLoadedInitialData: boolean
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  leaguesStore: LeagueStore;

  constructor() {
    this.leaguesStore = {
      leagues: [],
      countries: [],
      currentLeagueForEdit: null, 
      countrySelected: 'all',
      addEditAction: 'add',
      isLoadedInitialData: false
    }
  }
  
  setLeagues(leagues: LeagueDto[]) {
    this.leaguesStore = {
      ...this.leaguesStore,
      leagues: [...leagues]
    }
  }

  setCountries(countries: Country[]) {
    this.leaguesStore = {
      ...this.leaguesStore,
      countries: [...countries]
    }
  }

  setCurrentLeagueForEdit(currentLeagueForEdit: LeagueDto) {
    this.leaguesStore = {
      ...this.leaguesStore,
      currentLeagueForEdit
    }
  }

  setCountrySelected(countrySelected: CountrySelected) {
    this.leaguesStore = {
      ...this.leaguesStore,
      countrySelected
    }
  }

  setAddEditAction(addEditAction: AddEditAction) {
    this.leaguesStore = {
      ...this.leaguesStore,
      addEditAction
    }
  }

  setIsLoadedInitialData(isLoadedInitialData: boolean) {
    this.leaguesStore = {
      ...this.leaguesStore,
      isLoadedInitialData
    }
  }
}
