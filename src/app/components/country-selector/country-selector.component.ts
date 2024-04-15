import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Country } from '../../models/api-response.model'
import { CountryApiService } from '../../services/country-api.service'
import { StoreService } from '../../store/store.service'
import { UseCaseService } from '../../uses-cases/use-case.service'

@Component({
  selector: 'app-country-selector',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  providers: [CountryApiService],
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.scss'
})
export class CountrySelectorComponent implements OnInit {
  private countryApiServive = inject(CountryApiService);
  storeService = inject(StoreService);
  private useCaseService = inject(UseCaseService);


  private countries: Country[] = [];
  countryCtrl = new FormControl('');
  allLeaguesCtrl = new FormControl(true)
  filteredCountries: Observable<Country[]>;

  checkLeagueDesabled = false;

  constructor() {
    this.countryCtrl.disable();
    this.filteredCountries = this.countryCtrl.valueChanges.pipe(
      startWith(''),
      map(country => (country ? this._filterCountries(country) : this.countries.slice())),
    )
  }

  ngOnInit() {
    this.countryApiServive.getCountries().subscribe(countries => {
      this.countries = countries;
      this.storeService.setCountries(countries)
    })
    if(this.storeService.leaguesStore.isLoadedInitialData) {
      this.countryCtrl.setValue(this.storeService.leaguesStore.countrySelected)
      this.allLeaguesCtrl.setValue(this.storeService.leaguesStore.countrySelected === 'all')
      this.countryCtrl.enable(); 
    }
  }

  private _filterCountries(value: string): Country[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

  onSelectionCountryChange(countrySelected: string) {
    this.storeService.setCountrySelected(countrySelected);    
  }

  onChangeAllLeagues() {
    if(this.allLeaguesCtrl.value) {
      this.storeService.setCountrySelected('all');
      this.countryCtrl.disable();
    }else {
      if(this.storeService.leaguesStore.countrySelected === 'all') {
        this.storeService.setCountrySelected('');
      }
      this.countryCtrl.enable();
    }
  }

  filterLeauges() {
    this.useCaseService.getFilteredLeagues();
  }
}
