import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLeagueComponent } from './add-edit-league.component';

describe('AddEditLeagueComponent', () => {
  let component: AddEditLeagueComponent;
  let fixture: ComponentFixture<AddEditLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditLeagueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
