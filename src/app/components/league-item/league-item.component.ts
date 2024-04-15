import { Component, Input, OnInit, inject} from '@angular/core';
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

import { DialogDeleteComponent } from '../../components/dialog-delete/dialog-delete.component'
import { LeagueDto } from '../../models/api-response.model';

import { StoreService } from '../../store/store.service';
import { UseCaseService } from '../../uses-cases/use-case.service';


@Component({
  selector: 'app-league-item',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule, CommonModule, DialogDeleteComponent],
  templateUrl: './league-item.component.html',
  styleUrl: './league-item.component.scss'
})
export class LeagueItemComponent {
  @Input() league!: LeagueDto

  private router = inject(Router)
  private storeService = inject(StoreService)
  private useCaseService = inject(UseCaseService)
  private dialog = inject(MatDialog)
  private snackBar = inject(MatSnackBar)

  editLeague() {
    this.storeService.setCurrentLeagueForEdit(this.league);
    this.storeService.setAddEditAction('edit');
    this.router.navigate(['/add-edit-leagues']);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.useCaseService.deleteLeague(this.league.league.id);
        this.snackBar.open('Liga eliminada satisfactoriamente', 'Aceptar');        
      }
    });
  }

  deleteLeague() {
    this.openDialog('100ms','100ms');    
  }
}
