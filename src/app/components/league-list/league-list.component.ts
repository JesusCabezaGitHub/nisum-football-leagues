import { Component, OnInit, inject } from '@angular/core';

import { LeagueDto } from '../../models/api-response.model';
import { StoreService } from '../../store/store.service';
import { UseCaseService } from '../../uses-cases/use-case.service';

import { LeagueItemComponent } from '../league-item/league-item.component'

@Component({
  selector: 'app-league-list',
  standalone: true,
  imports: [ LeagueItemComponent],
  templateUrl: './league-list.component.html',
  styleUrl: './league-list.component.scss'
})
export class LeagueListComponent implements OnInit {
  
  private storeService = inject(StoreService);
  private useCaseService = inject(UseCaseService);
  
  leagues: LeagueDto[] = [];
  
  ngOnInit() {
    this.useCaseService.getAllLeagues();
    this.leagues = this.storeService.getLeagues(); 
  }
}
