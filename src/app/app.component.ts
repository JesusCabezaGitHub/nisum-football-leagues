import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryApiService } from './services/country-api.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'nissum-football-leagues';
  countryApiServive = inject(CountryApiService);
  
  ngOnInit() {
    this.countryApiServive.getCountries().subscribe(countries => {
      console.log(countries);
    })
  }
  
  
}
