import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddEditLeaguePageComponent } from './pages/add-edit-league-page/add-edit-league-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home-page/home-page.component').then( m => m.HomePageComponent)    
    },
    {
        path: 'add-edit-leagues',
        loadComponent: () => import('./pages/add-edit-league-page/add-edit-league-page.component').then( m => m.AddEditLeaguePageComponent)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
