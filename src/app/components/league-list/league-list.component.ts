import { Component, OnInit, inject } from '@angular/core';
import { LeaguesApiService } from '../../services/leagues-api.service'
import { LeagueDto } from '../../models/api-response.model'

@Component({
  selector: 'app-league-list',
  standalone: true,
  imports: [],
  providers: [LeaguesApiService],
  templateUrl: './league-list.component.html',
  styleUrl: './league-list.component.scss'
})
export class LeagueListComponent implements OnInit {
  private leaguesApiService = inject(LeaguesApiService)
  leagues: LeagueDto[] = [];
  
  ngOnInit() {
    this.leaguesApiService.getLeagues().subscribe(leagues => {
      this.leagues = leagues;
      console.log('Leagues: ', this.leagues)
    })
  }
}
