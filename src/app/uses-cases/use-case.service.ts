import { Injectable, inject} from '@angular/core';

import { LeagueDto } from '../models/api-response.model';
import { LocalStorageService } from '../utils/local-storage.service';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root'
})
export class UseCaseService {
  private localStorageService = inject(LocalStorageService);
  storeService = inject(StoreService);
  
  constructor() { }

  getAllLeagues() {
    const allLeagues = this.localStorageService.getLeagues()
    this.setStoreByFilter(allLeagues);
  }

  addLeague(league: LeagueDto) {
    const allLeagues = this.localStorageService.getLeagues();
    this.localStorageService.removeCurrentData();
    allLeagues.push(league);
    this.localStorageService.saveLeagues(allLeagues);
  }

  editLeague(leagueParam: LeagueDto) {
    const allLeagues = this.localStorageService.getLeagues();
    this.localStorageService.removeCurrentData();
    const leaguePosition = allLeagues.findIndex(league => league.league.id === leagueParam.league.id)
    allLeagues[leaguePosition] = {...leagueParam}
    this.localStorageService.saveLeagues(allLeagues);
  }

  removeLeague(leagueId: number) {

  }

  getFilteredLeagues() {
    this.getAllLeagues()
  }

  private setStoreByFilter(allLeagues: LeagueDto[]) {
    const countrySelected = this.storeService.leaguesStore.countrySelected;
    if(countrySelected === 'all') {
      this.storeService.setLeagues(allLeagues);
      return
    }

    const filteredLeagues = allLeagues.filter( league => league.country.name === countrySelected);
    this.storeService.setLeagues(filteredLeagues);
  }
}
