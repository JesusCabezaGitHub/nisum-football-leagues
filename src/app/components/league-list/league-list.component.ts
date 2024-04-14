import { Component, OnInit, inject } from '@angular/core';

import { LeagueDto } from '../../models/api-response.model'
import { StoreService } from '../../store/store.service'

@Component({
  selector: 'app-league-list',
  standalone: true,
  imports: [],
  templateUrl: './league-list.component.html',
  styleUrl: './league-list.component.scss'
})
export class LeagueListComponent implements OnInit {
  
  private storeService = inject(StoreService);

  leagues: LeagueDto[] = [];
  
  ngOnInit() {
    
  }
}
