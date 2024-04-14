import { Component, OnInit, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { LeaguesApiService } from '../../services/leagues-api.service';
import { LocalStorageService } from '../../utils/local-storage.service';

import { CountrySelectorComponent } from '../../components/country-selector/country-selector.component';
import { LeagueListComponent } from '../../components/league-list/league-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ CountrySelectorComponent, LeagueListComponent, MatDividerModule],
  providers: [LeaguesApiService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private leaguesApiService = inject(LeaguesApiService);
  private localStorageService = inject(LocalStorageService)
  
  ngOnInit() {
    this.loadInitialData();
  }

  loadInitialData() {
    this.leaguesApiService.getLeagues().subscribe(leagues => {
      this.localStorageService.removeCurrentData();
      this.localStorageService.saveLeagues(leagues);
    })
  }

}
