import { Component } from '@angular/core';
import { CountrySelectorComponent } from '../../components/country-selector/country-selector.component'
import { LeagueListComponent } from '../../components/league-list/league-list.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ CountrySelectorComponent, LeagueListComponent  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
