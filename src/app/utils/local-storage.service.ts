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
    return localStorage.getItem(this.storageKey) || this.defaultLeagues;
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
