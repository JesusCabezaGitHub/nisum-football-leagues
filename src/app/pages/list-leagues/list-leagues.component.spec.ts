import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeaguesComponent } from './list-leagues.component';

describe('ListLeaguesComponent', () => {
  let component: ListLeaguesComponent;
  let fixture: ComponentFixture<ListLeaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLeaguesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
