import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueItemComponent } from './league-item.component';

describe('LeagueItemComponent', () => {
  let component: LeagueItemComponent;
  let fixture: ComponentFixture<LeagueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeagueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
