import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLeaguePageComponent } from './add-edit-league-page.component';

describe('AddEditLeaguePageComponent', () => {
  let component: AddEditLeaguePageComponent;
  let fixture: ComponentFixture<AddEditLeaguePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditLeaguePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditLeaguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
