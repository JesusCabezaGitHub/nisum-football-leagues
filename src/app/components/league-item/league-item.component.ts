import { Component, Input, OnInit, inject} from '@angular/core';
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { LeagueDto } from '../../models/api-response.model';

import { StoreService } from '../../store/store.service';


@Component({
  selector: 'app-league-item',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule, CommonModule],
  templateUrl: './league-item.component.html',
  styleUrl: './league-item.component.scss'
})
export class LeagueItemComponent {
  @Input() league!: LeagueDto

  private storeService = inject(StoreService)
  private router = inject(Router)

  editLeague() {
    this.storeService.setCurrentLeagueForEdit(this.league);
    this.storeService.setCountrySelected(this.league.country.name)
    this.storeService.setAddEditAction('edit');
    this.router.navigate(['/add-edit-leagues']);
  }
}
