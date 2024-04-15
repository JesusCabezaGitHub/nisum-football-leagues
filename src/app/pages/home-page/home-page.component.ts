import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router'
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { LeaguesApiService } from '../../services/leagues-api.service';
import { LocalStorageService } from '../../utils/local-storage.service';
import { StoreService } from '../../store/store.service';
import { UseCaseService } from '../../uses-cases/use-case.service';

import { CountrySelectorComponent } from '../../components/country-selector/country-selector.component';
import { LeagueListComponent } from '../../components/league-list/league-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ CountrySelectorComponent, LeagueListComponent, MatDividerModule, MatButtonModule],
  providers: [LeaguesApiService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  private leaguesApiService = inject(LeaguesApiService);
  private localStorageService = inject(LocalStorageService);
  private useCaseService = inject(UseCaseService);
  private router = inject(Router);
  storeService = inject(StoreService);
  
  ngOnInit() {
    if(!this.storeService.leaguesStore.isLoadedInitialData) {
      this.loadInitialData();
    }else {
      this.useCaseService.getAllLeagues();
    }
  }

  loadInitialData() {
      this.leaguesApiService.getLeagues().subscribe(leagues => {
        this.localStorageService.removeCurrentData();
        this.localStorageService.saveLeagues(leagues);
        this.storeService.setIsLoadedInitialData(true);
      })

    
  }

  goToAddleague() {
    this.storeService.setAddEditAction('add')
    this.router.navigate(['/add-edit-leagues'])
  }

}
