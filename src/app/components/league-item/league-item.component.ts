import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { LeagueDto } from '../../models/api-response.model';


@Component({
  selector: 'app-league-item',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule, CommonModule],
  templateUrl: './league-item.component.html',
  styleUrl: './league-item.component.scss'
})
export class LeagueItemComponent {
  @Input() league!: LeagueDto

}
