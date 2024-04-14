import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Country } from '../../models/api-response.model'
import { CountryApiService } from '../../services/country-api.service'
import { StoreService } from '../../store/store.service'

@Component({
  selector: 'app-country-selector',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  providers: [CountryApiService],
  templateUrl: './country-selector.component.html',
  styleUrl: './country-selector.component.scss'
})
export class CountrySelectorComponent implements OnInit {
  private countries: Country[] = [];
  private countryApiServive = inject(CountryApiService);
  private storeService = inject(StoreService);
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
    })
  }

  private _filterCountries(value: string): Country[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

  onSelectionCountryChange(countrySelected: string) {
    console.log(countrySelected);
    this.storeService.setCountrySelected(countrySelected);    
  }

  onChangeAllLeagues() {
    console.log(this.allLeaguesCtrl.value);
    if(this.allLeaguesCtrl.value) {
      this.storeService.setCountrySelected('all');
      this.countryCtrl.disable();
    }else {
      this.storeService.setCountrySelected('');
      this.countryCtrl.enable();
    }
  }
}
