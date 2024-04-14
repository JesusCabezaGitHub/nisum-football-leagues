import { Injectable } from '@angular/core';
import { LeagueDto } from '../models/api-response.model'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storageKey = 'legues';
  private defaultLeagues = []
  
  constructor() { }

  getLeagues() {
    const leagues = localStorage.getItem(this.storageKey);
    if(leagues) {
      return JSON.parse(leagues)
    }
    return  this.defaultLeagues;
  }

  saveLeagues(leagues: LeagueDto[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(leagues))
  }

  editLeague(league: LeagueDto) {

  }
  removeLeague(league: LeagueDto) {

  }

  removeCurrentData() {
    localStorage.removeItem(this.storageKey)
  }

}
