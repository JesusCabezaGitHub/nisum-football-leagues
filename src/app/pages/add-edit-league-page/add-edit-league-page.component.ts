import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { StoreService } from '../../store/store.service';
import { UseCaseService } from '../../uses-cases/use-case.service';
import { CountryLeague, LeagueDto, LeagueInformation } from '../../models/api-response.model'

@Component({
  selector: 'app-add-edit-league-page',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatSelectModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './add-edit-league-page.component.html',
  styleUrl: './add-edit-league-page.component.scss'
})
export class AddEditLeaguePageComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router)
  private useCaseService = inject(UseCaseService);
  private snackBar = inject(MatSnackBar)
  storeService = inject(StoreService)
  
  private urlDefaultLogo = '../../../assets/img_football_league_default.png'
  private wayForm  = 'add';
  leagueForm: FormGroup;
  errorMessage = 'You must enter a value';

  constructor() {
    this.leagueForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      type: [null, [Validators.required]],
      country: [null, []]
    })
  }
  ngOnInit() {
    this.wayForm = this.storeService.leaguesStore.addEditAction;
    if(this.wayForm === 'edit') {
      const leagueInStore = this.storeService.leaguesStore.currentLeagueForEdit;
      console.log('leagueInStore:', leagueInStore);
      if(leagueInStore) {
        this.leagueForm.get('name')?.setValue(leagueInStore.league.name);
        this.leagueForm.get('type')?.setValue(leagueInStore.league.type);
        this.leagueForm.get('country')?.setValue(leagueInStore.country.name);
      }
    } else {
      this.leagueForm.get('country')?.setValue(this.storeService.leaguesStore.countrySelected);
    }
  }

  backToLeagues() {
    this.router.navigate(['/home'])
  }

  get isValidName() {
    return this.leagueForm.get('name')?.valid;
  }

  get isValidType() {
    return this.leagueForm.get('type')?.valid;
  }

  get isValidForm() {
    return this.leagueForm.valid;
  }

  saveLeague() {
    const countrySelected = this.storeService.leaguesStore.countrySelected;
    const countries = this.storeService.leaguesStore.countries;
    const country: CountryLeague = countries.find( country => country.name === countrySelected)!
       
    const leagueInformation: LeagueInformation = {
      id: this.getLeagueId() ,
      name: this.leagueForm.value.name,
      type: this.leagueForm.value.type,
      logo: this.getLeagueLogo()
    }

    const leagueDto: LeagueDto = {
      league: leagueInformation,
      country
    }

    if(this.wayForm === 'add') {
      this.useCaseService.addLeague(leagueDto);  
    }else {
      this.useCaseService.editLeague(leagueDto);
    }
    this.snackBar.open('Liga guardada satisfactoriamente', 'Aceptar');
    this.leagueForm.reset();
    
  }

  private getLeagueId() {
    return this.wayForm === 'add' 
    ? parseInt(String(Math.random() * 100000)) 
    : (this.storeService.leaguesStore.currentLeagueForEdit?.league.id ?? 0);
  }

  private getLeagueLogo() {
    return this.wayForm === 'add' 
    ? this.urlDefaultLogo 
    : (this.storeService.leaguesStore.currentLeagueForEdit?.league.logo ?? '');
  }
}
